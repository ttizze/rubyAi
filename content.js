let elements, textList;

//要素を再帰的に取得し、翻訳対象であれば配列に格納する
//バックグラウンドからオリジナルをkey、翻訳結果をvalueにもつmapを受け取る

// 翻訳対象のテキストを取得する関数
function getTextList() {
    elements = getElements(document.body);
    appendUUID(elements);
    let textList = [];
    for (let i = 0; i < elements.length; i++) {
        let text = elements[i].innerText;
        console.log(text);
        textList.push(text);
    }
    return textList;
}


// 要素にUUIDを付与する関数
function appendUUID(elements) {
    for (let i = 0; i < elements.length; i++) {
        let uuid = "UUID" + i;
        elements[i].setAttribute("uuid", uuid);
    }
}


// テキストを翻訳する関数
function sendOriginalTextListToBackground(textList) {
    chrome.runtime.sendMessage({ "message": "original_text_list", "textList": textList });
}

//要素を再帰的に取得し、翻訳対象であれば配列に格納する
function getElements(element) {
    let elements = [];
    if (element.nodeType !== Node.TEXT_NODE && element.nodeType !== Node.COMMENT_NODE ) {
        if (shouldBeTranslated(element)) {
            if (isElementInViewport(element)  && isElementVisible(element)) {
                elements.unshift(element);
            }else{
                elements.push(element);
            }
        }
    }
    if (element.nodeType === Node.ELEMENT_NODE) {
        for (let child of element.childNodes) {
            elements = elements.concat(getElements(child));
        }
    }
    return elements
}

function getElements(node) {
    let elements = [];
    if (node.nodeName !== "#text" && node.nodeName !== "#comment" && !isNotTranslatable(node)) {
        if (shouldProcessNode(node)) {
            if (isNodeInViewport(node, .3) && !isNodeIgnored(node)) {
                elements.unshift(node);
            }else{
                elements.push(node);
            }
        } else {
            for (let i = 0; i < node.childNodes.length; ++i) {
                processNode(node.childNodes[i]);
            }
        }
    }
}
function shouldProcessNode(node) {
    if (node.nodeName === "#text" || node.nodeName === "#comment") return false;
    if (node.isContentEditable) return false;
    for (let i = 0; i < node.childNodes.length; ++i) {
        let childNode = node.childNodes[i];
        if (childNode.nodeName === "#text" && childNode.wholeText.trim() !== "" || childNode.nodeName === "font") return true;
    }
    for (let i = 0; i < node.childNodes.length; ++i) {
        let childNode = node.childNodes[i];
        if (childNode.nodeName !== "#text" && childNode.nodeName !== "#comment" ) return false;
    }
    return node.innerText !== undefined && node.innerText.trim() !== "";
}

function isNotTranslatable(element) {
    return element.getAttribute("translate") === "no" || (element.className && element.className.split(" ").includes("notranslate"));
}

// 要素がビューポート内にあるかどうかを判断する関数
function isNodeInViewport(node, offset = 0) {
    const rect = node.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return !(rect.bottom < 0 - windowHeight * offset || 
             rect.right < 0 - windowWidth * offset || 
             rect.top > windowHeight * (1 + offset) || 
             rect.left > windowWidth * (1 + offset));
}

function Ba(t, n = true) {
    if ("#text" == t.nodeName || "#comment" == t.nodeName) return false;
    if (!$a(t, e.websiteData.hostname)) return false;
    if (t.isContentEditable && n) return false;
    if (function (e) {
            switch (e.tagName.toLowerCase()) {
                case "input":
                    return "submit" !== e.getAttribute("type");
                case "textarea":
                    return true;
                default:
                    return false
            }
        }(t)) return false;
    if (jn(t)) return false;
    for (var o = 0; o < t.childNodes.length; ++o) {
        if ("#text" == (i = t.childNodes[o]).nodeName && "" != i.wholeText.trim() || "font" == i.nodeName) return true
    }
    for (o = 0; o < t.childNodes.length; ++o) {
        var i;
        if ("#text" != (i = t.childNodes[o]).nodeName && "#comment" != i.nodeName && (!qn(i) || jn(i) || "inline" != window.getComputedStyle(i).display || Hn(t))) return false
    }
    return undefined !== t.innerText && "" != t.innerText.trim()
}

function shouldBeTranslated(element) {
    if (element.tagName.toLowerCase() === "input" || element.tagName.toLowerCase() === "textarea" || element.tagName.toLowerCase() === "script" || element.tagName.toLowerCase() === "style") {
        return false;
    }
    for (let i = 0; i < element.childNodes.length; i++) {
        let child = element.childNodes[i];
        if (child.nodeType === Node.TEXT_NODE) {
            let text = child.nodeValue.trim();
            // テキストが数字だけでないことを確認
            if (!/^\d+$/.test(text)) {
                return true;
            }
        }
    }
    if (element.innerText && element.innerText.trim() !== "") {
        return true;
    }
    return false; // ここを追加
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


window.addEventListener('load', function() {
    elements = null;
    textList = null;
    chrome.storage.local.get('power', function(data) {
        if (data.power === undefined) {
            chrome.storage.local.set({power: false});
        } else if (data.power) {
            let textList = getTextList();
            sendOriginalTextListToBackground(textList);
        }
    });
});

// メッセージリスナーを設定
chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    // URLが変更されたとき翻訳を行う
    if (request.message === "url_changed") {
        if (power) {
            let textList= getTextList();
            sendOriginalTextListToBackground(textList);
        }
    }else if(request.message === "translation_result" ){
        applyTranslation(request.translation).catch(console.error);
    }else if (request.message === "on") {
        chrome.runtime.sendMessage({ "message": "on" }); 
        let textList = getTextList();
        sendOriginalTextListToBackground(textList);
    } else if (request.message === "off") {
        // 翻訳を停止するためのフラグを立てます
        chrome.runtime.sendMessage({ "message": "off" });
    }
});
