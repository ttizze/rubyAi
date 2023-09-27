// テキストノードをbackground.jsに送る関数
function sendOriginalTextListToBackground(textList) {
    chrome.runtime.sendMessage({ message: 'original_text_list', textList });
}

function isElementVisible(element) {
    let el = element;
    while (el && el.nodeType === Node.ELEMENT_NODE) {
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') {
            return false;
        }
        el = el.parentNode;
    }
    return true;
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0
        && rect.left >= 0
        && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function getTextNodes(node) {
    let textNodes = [];
    if (node.nodeType === Node.TEXT_NODE
        && /\S/.test(node.nodeValue)
        && isElementVisible(node.parentNode)
        && !node.parentNode.closest('[data-translated]')
        && !node.parentNode.classList.contains('notranslate')) {
        if (isElementInViewport(node.parentNode) && isElementVisible(node.parentNode)) {
            textNodes.unshift(node);
        } else {
            textNodes.push(node);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE
        && node.tagName.toLowerCase() !== 'script'
        && node.tagName.toLowerCase() !== 'style') {
        node.childNodes.forEach((child) => {
            textNodes = textNodes.concat(getTextNodes(child));
        });
    }
    return textNodes.filter((textNode) => {
        const text = textNode.nodeValue.trim();
        // テキストが一文字だけまたは数字だけでないことを確認
        return text.length > 1 && !/^[\d\p{P}]+$/.test(text);
    });
}

function getTextValues(node) {
    const textNodes = getTextNodes(node);
    return textNodes.map((textNode) => textNode.nodeValue.trim());
}

function createRubyElement(originalText, translatedText) {
    const ruby = document.createElement('ruby');
    const rb = document.createElement('rb');
    const rt = document.createElement('rt');
    rb.textContent = originalText;
    rt.textContent = translatedText;
    ruby.appendChild(rb);
    ruby.appendChild(rt);
    rt.style.fontSize = '16px';
    return ruby;
}
// 翻訳結果を適用する関数
async function applyTranslation(translationMap) {
    translationMap.forEach(([originalText, translatedText]) => {
        console.log('originalText', originalText);
        console.log('translatedText', translatedText);
        const textNode = getTextNodes(document.body).find((node) => node.nodeValue.trim() === originalText);
        console.log('textNode', textNode);
        if (textNode && !textNode.parentNode.hasAttribute('data-translated')) {
            const originalParts = originalText.split(/(?<=\.\s|$|。)/);
            const translatedParts = translatedText.split(/(?<=\.\s|$|。)/);
            const span = document.createElement('span'); // 新しい親要素を作成する
            span.setAttribute('data-translated', ''); // 翻訳済みの属性を追加

            const maxLength = Math.max(originalParts.length, translatedParts.length);

            for (let i = 0; i < maxLength; i += 1) {
                const originalPart = originalParts[i] || '';
                const translatedPart = translatedParts[i] || '';
                const ruby = createRubyElement(originalPart, translatedPart);
                span.appendChild(ruby);
                span.style.lineHeight = '3';
            }
            textNode.parentNode.replaceChild(span, textNode);
        } else {
            console.log('not found');
        }
    });
}

window.addEventListener('load', () => {
    chrome.storage.local.get('power', (data) => {
        if (data.power === undefined) {
            chrome.storage.local.set({ power: false });
        } else if (data.power) {
            const textValues = getTextValues(document.body);
            sendOriginalTextListToBackground(textValues);
        }
    });
});

// メッセージリスナーを設定
chrome.runtime.onMessage.addListener(async (request) => {
    // URLが変更されたとき翻訳を行う
    if (request.message === 'url_changed') {
        chrome.storage.local.get('power', (data) => {
            if (data.power) {
                const textValues = getTextValues(document.body);
                sendOriginalTextListToBackground(textValues);
            }
        });
    } else if (request.message === 'translation_result') {
        applyTranslation(request.translation).catch(console.error);
    } else if (request.message === 'on') {
        chrome.runtime.sendMessage({ message: 'on' });
        const textValues = getTextValues(document.body);
        sendOriginalTextListToBackground(textValues);
    } else if (request.message === 'off') {
        chrome.runtime.sendMessage({ message: 'off' });
    }
});
