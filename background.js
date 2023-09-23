chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get('power', function(result) {
        setBadgeText(result.power ? "ON" : "OFF");
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    if (changeInfo.status === 'complete' && changeInfo.url) {
        chrome.tabs.sendMessage(tabId, { "message": "url_changed" });
    }
});

// メッセージリスナーを設定
chrome.runtime.onMessage.addListener(
    async function (request, sender, sendResponse) {
        if (request.message === "original_text_string") {
            let response = await sendTranslationToContent(request.textString, sender);
            sendResponse(response);
        } else if (request.message === "on") {
            chrome.action.setBadgeText({text: "ON"});
        } else if (request.message === "off") {
            chrome.action.setBadgeText({text: "OFF"});
        }
        return true; // indicates that the response is sent asynchronously
    }
);

function setBadgeText(text) {
    chrome.action.setBadgeText({text: text});
}

// Function to call the translation API
async function sendTranslationToContent(textString, sender) {
    const textLists = splitTextString(textString);

    for (let text of textLists) {
        const response = await translate(text);
        await processResponse(response, sender.tab.id);
    }
}


function splitTextString(textString) {
    const textLists = [];
    if (textString.length > 3000) {
        let start = 0;
        while (start < textString.length) {
            let end = start + 3000;
            if (end < textString.length) {
                end = textString.lastIndexOf('UUID', end);
                if (end != -1) {
                    end = textString.indexOf(' ', end);
                } else {
                    end = textString.length;
                }
            }
            textLists.push(textString.substring(start, end));
            start = end;
        }
    } else {
        textLists.push(textString);
    }
    return textLists;
}

// Function to call the translation API
async function translate(text) {
    return new Promise((resolve, reject) => {
        try {
            const url = 'https://api.openai.com/v1/chat/completions';
            chrome.storage.local.get(['api_key', 'language'], async function(result) {
                if (result.api_key) {
                    const apiKey = result.api_key;
                    //TODO chrome.i18n.getUILanguageでデフォルト取得したい
                    const language = result.language || 'japanese';
                    console.log('language: ' + language)
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + apiKey
                        },
                        body: JSON.stringify({
                            "model": "gpt-3.5-turbo-0613",
                            "messages": [
                                { "role": "system", "content": `You are a translation AI. Paragraphs, sentences, words, and uuid tags will be sent to you. Translate the paragraphs, sentences, and words into ${language} and output them, and output the uuid tags as they are. Do not change the order of sentences within a paragraph unless absolutely necessary.Do not output any additional punctuation such as periods, commas, or punctuation marks that do not exist in the original text. The alignment of uuid tags is critical and must not be disrupted under any circumstances. Misalignment of uuid tags will cause serious problems. Never exceed the boundaries of the uuid tags. Deep Breath. Let's do our best!` },
                                { "role": "user", "content": text }
                            ],
                            "temperature": 0.7,
                            "stream": true,
                        }),
                    });
                    resolve(response);
                } else {
                    reject('API Key not found.');
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

async function processResponse(response, tabId) {
    // Create a TextDecoder to decode the response body stream
    const decoder = new TextDecoder("utf-8");
    const reader = response.body.getReader();
    let buffer = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        const lines = decoder.decode(value).split("\n");
        for (const line of lines) {
            if (line.startsWith('data:')) {
                const data = line.slice(5);
                try {
                    const jsonData = JSON.parse(data);
                    if (jsonData.choices[0].delta.content) {
                        buffer += jsonData.choices[0].delta.content;
                        if (/UUID\d+/.test(buffer)) {
                            sendToContent(tabId, buffer);
                            buffer = '';
                        }
                    }
                } catch (error) {
                    console.error('Invalid JSON:', data);
                }
            }
        }
    }
}

async function sendToContent(tabId, translation) {
    chrome.tabs.sendMessage(tabId, { message: "translation_result", translation: translation });
}
