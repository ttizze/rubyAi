let textNodes, nodeUuidMap, textString;
let isTranslating;

chrome.storage.local.get('isTranslating', function(data) {
    if (data.isTranslating === undefined) {
        chrome.storage.local.set({isTranslating: false});
        isTranslating = false;
        console.log("isTranslateset" + isTranslating);
    } else {
        isTranslating = data.isTranslating;
        console.log("isTranslate" + isTranslating);
    }
});

window.addEventListener('load', function() {
    if (isTranslating) {
        let textString = getTextString();
        sendOriginalTextStringToBackground(textString);
    }
});

// メッセージリスナーを設定
chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    // URLが変更されたとき翻訳を行う
    if (request.message === "url_changed") {
        if (isTranslating) {
            let textString = getTextString();
            sendOriginalTextStringToBackground(textString);
        }
    }else if(request.message === "translation_result" ){
        applyTranslation(request.translation).catch(console.error);
    }else if (request.message === "on") {
        // 翻訳を開始するためのフラグを立てます
        chrome.storage.local.set({isTranslating: true});
        console.log("Start translation");
        chrome.runtime.sendMessage({ "message": "on" }); 
        let textString = getTextString();
        sendOriginalTextStringToBackground(textString);
    } else if (request.message === "off") {
        // 翻訳を停止するためのフラグを立てます
        chrome.storage.local.set({isTranslating: false});
        console.log("Stop translation");
        chrome.runtime.sendMessage({ "message": "off" });
    }
});
// 翻訳データを更新する関数
function getTextString() {
    textNodes = getTextNodes(document.body);
    nodeUuidMap = createNodeUuidMap(textNodes);
    textString = createTextString(textNodes, nodeUuidMap);
    return textString;
}

function getTextNodes(node) {
    let textNodes = [];
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.nodeValue) && isElementVisible(node.parentNode)) {
        if (isElementInViewport(node.parentNode)  && isElementVisible(node.parentNode)) {
            console.log(node);
            console.log(node.parentNode);
            textNodes.unshift(node);
        }else{
            textNodes.push(node);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() !== 'script' && node.tagName.toLowerCase() !== 'style') {
        for (let child of node.childNodes) {
            textNodes = textNodes.concat(getTextNodes(child));
        }
    }
    return textNodes.filter(textNode => {
        let text = textNode.nodeValue.trim();
        // テキストが一文字だけまたは数字だけでないことを確認
        return text.length > 1 && !/^\d+$/.test(text);
    });
}
function isElementVisible(el) {
    while (el && el.nodeType === Node.ELEMENT_NODE) {
        let style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') {
            return false;
        }
        el = el.parentNode;
    }
    return true;
}


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// テキストノードとUUIDのマッピングを作成する関数
function createNodeUuidMap(textNodes) {
    let nodeUuidMap = new Map();
    for (let i = 0; i < textNodes.length; i++) {
        let uuid = 'UUID' + i;
        nodeUuidMap.set(textNodes[i], uuid);
    }
    return nodeUuidMap;
}

// テキストノードの内容とUUIDを結合したテキストを作成する関数
function createTextString(textNodes, nodeUuidMap) {
    let textString = '';
    for (let i = 0; i < textNodes.length; i++) {
        let uuid = nodeUuidMap.get(textNodes[i]);
        textString += textNodes[i].nodeValue + ' ' + uuid + ' ';
    }
    return textString.trim(); // 余分なスペースを削除
}

// テキストノードを翻訳する関数
function sendOriginalTextStringToBackground(textString) {
    chrome.runtime.sendMessage({ "message": "original_text_string", "textString": textString });
}

// 翻訳結果を適用する関数
async function applyTranslation(translationAndUUID) {
    let translations = translationAndUUID.split(/(UUID\d+)/).filter(str => str !== "");

    let uuid = translations[1];
    let translation = translations[0];
    let textNode = [...nodeUuidMap].find(([node, id]) => id === uuid)[0];
    if (textNode) {
        let originalParts = textNode.nodeValue.split(/(?<=\.\s|$|。)/);
        let translatedParts = translation.split(/(?<=\.\s|$|。)/);
        let span = document.createElement('span'); // 新しい親要素を作成する
        for (let j = 0; j < originalParts.length; j++) {
            if (j < translatedParts.length) {
                let ruby = createRubyElement(originalParts[j], translatedParts[j]);
                span.appendChild(ruby);
                span.style.lineHeight = '3';
            }
        }
        textNode.parentNode.replaceChild(span, textNode);
    }else{
        console.log("not found");
    }
}
function createRubyElement(originalText, translatedText) {
    let ruby = document.createElement('ruby');
    let rb = document.createElement('rb');
    let rt = document.createElement('rt');
    rb.textContent = originalText;
    rt.textContent = translatedText;
    ruby.appendChild(rb);
    ruby.appendChild(rt);
    rt.style.fontSize = '16px';
    return ruby;
}