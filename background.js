

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get('power', (result) => {
        chrome.action.setBadgeText({ text: result.power ? 'ON' : 'OFF' });
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete' && changeInfo.url) {
        chrome.tabs.sendMessage(tabId, { message: 'url_changed' });
    }
});

async function openAITranslate(text) {
    const url = 'https://api.openai.com/v1/chat/completions';
    chrome.storage.local.get(['OPENAI_API_KEY', 'language'], async (result) => {
        const OPENAI_API_KEY = result.OPENAI_API_KEY || '';
        const language = result.language || 'japanese';
        // ここで OPENAI_API_KEY と language を使用します
        if (OPENAI_API_KEY) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo-0613',
                        messages: [
                            { role: 'system', content: `You are a translater. Translate text to ${language}. Make it as short and simple as possible. Only output translated text. Do not output any other information. Do not change the order of sentences within a paragraph unless absolutely necessary. Do not output any additional punctuation such as periods, commas, or punctuation marks that do not exist in the original text. Translate in a way that is consistent with the context. Deep Breath. Let's do our best!` },
                            { role: 'user', content: text },
                        ],
                        temperature: 0.7,
                    }),
                });
                const data = await response.json();
                return data.choices[0].message.content.trim();
            } catch (error) {
                console.log('Error during translation:', error);
                return 'Error during translation';
            }
        } else {
            console.log('API_KEY is not found');
            return 'API_KEY is not found';
        }
    });
}
async function libreTranslate(text) {
    // const result = await new Promise((resolve) => {
    //     chrome.storage.local.get('language', resolve);
    // });
    // const language = result.language || 'japanese';

    const res = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        body: JSON.stringify({
            q: text,
            source: 'auto',
            target: 'ja',
            format: 'text',
            api_key: '',
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    console.log(await res.json());
    const data = await res.json();
    return data.translatedText;
}
async function googleTranslate(text) {
    const source = 'en';
    const language = 'ja';
    const url = `https://script.google.com/macros/s/AKfycbwuuEUg_ahUXdvjLBbf8kbTqn4x5lo87RqqkD2AkhnppuwJA5-7IWdHjJx32AkGuiZ0Qw/exec?text=${text}&source=${source}&target=${language}`;
    const response = await fetch(url);
    console.log(await response.text());
    return response;
}
async function deepLTranslate(text) {
    const result = await new Promise((resolve) => {
        chrome.storage.local.get(['DEEPL_API_KEY', 'language'], resolve);
    });

    const DEEPL_API_KEY = result.DEEPL_API_KEY || '';
    const language = result.language || 'JA';

    if (!DEEPL_API_KEY) {
        console.log('API_KEY is not found');
        return 'API_KEY is not found';
    }

    try {
        const API_URL = 'https://api.deepl.com/v2/translate';
        const body = {
            text: [text],
            target_lang: 'JA',
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}`,
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return data.translations[0].text;
    } catch (error) {
        console.log('Error during translation:', error);
        return 'Error during translation';
    }
}
async function sendTranslationToContent(textList, sender) {
    const map = new Map();
    const promises = textList.map(async (text) => {
        try {
            const response = await deepLTranslate(text);
            map.set(text, response);
            // 各翻訳が完了するたびに結果を送信
            chrome.tabs.sendMessage(sender.tab.id, { message: 'translation_result', translation: Array.from(map.entries()) });
        } catch (error) {
            console.log('Error during translation:', error);
            throw new Error('Error during translation:', error);
        }
    });

    await Promise.all(promises);
}
// メッセージリスナーを設定
chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
        if (request.message === 'original_text_list') {
            const response = await sendTranslationToContent(request.textList, sender);
            sendResponse(response);
        } else if (request.message === 'on') {
            chrome.action.setBadgeText({ text: 'ON' });
        } else if (request.message === 'off') {
            chrome.action.setBadgeText({ text: 'OFF' });
        }
        return true; // indicates that the response is sent asynchronously
    },
);

// Function to call the translation API

// Function to call the translation API

// async function processResponse(response, tabId) {
//     // Create a TextDecoder to decode the response body stream
//     const decoder = new TextDecoder("utf-8");
//     const reader = response.body.getReader();
//     let buffer = '';

//     while (true) {
//         const { done, value } = await reader.read();
//         if (done) {
//             break;
//         }
//         const lines = decoder.decode(value).split("\n");
//         for (const line of lines) {
//             if (line.startsWith('data:')) {
//                 const data = line.slice(5);
//                 try {
//                     const jsonData = JSON.parse(data);
//                     if (jsonData.choices[0].delta.content) {
//                         buffer += jsonData.choices[0].delta.content;
//                         if (/UUID\d+/.test(buffer)) {
//                             sendToContent(tabId, buffer);
//                             buffer = '';
//                         }
//                     }
//                 } catch (error) {
//                     console.error('Invalid JSON:', data);
//                 }
//             }
//         }
//     }
// }
