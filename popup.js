// popup.js
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('power', (result) => {
        chrome.action.setBadgeText({ text: result.power ? 'ON' : 'OFF' });
        document.getElementById('toggle').checked = result.power;
    });

    function setinputStateIcon(key, inputId, iconId) {
        // ここで保存された値を取得して、input要素に設定します
        chrome.storage.local.get(key, (result) => {
            if (result[key]) {
                document.getElementById(inputId).value = result[key];
                document.getElementById(iconId).src = '/images/checked.png';
            } else if (iconId) {
                document.getElementById(iconId).src = '/images/send.png';
            }
        });
    }

    function inputLister(inputId, iconId) {
        document.getElementById(inputId).oninput = function () {
            document.getElementById(iconId).src = '/images/send.png';
        };
    }

    function inputStateIconClickLister(iconId, key, inputId) {
        document.getElementById(iconId).addEventListener('click', function () {
            if (inputId.value !== '') {
                chrome.storage.local.set({ [key]: document.getElementById(inputId).value });
                this.classList.add('animate');
                this.addEventListener('animationend', function () {
                    this.classList.remove('animate');
                    this.src = '/images/checked.png';
                }, { once: true }); // イベントリスナーは一度だけ実行されます
            } else {
                alert('Please enter a value.');
            }
        });
    }

    setinputStateIcon('OPENAI_API_KEY', 'openAIApiKeyInput', 'saveOpenAIApiKeyIcon');
    inputLister('openAIApiKeyInput', 'saveOpenAIApiKeyIcon');
    inputStateIconClickLister('saveOpenAIApiKeyIcon', 'OPENAI_API_KEY', 'openAIApiKeyInput');

    setinputStateIcon('DEEPL_API_KEY', 'deepLApiKeyInput', 'saveDeepLApiKeyIcon');
    inputLister('deepLApiKeyInput', 'saveDeepLApiKeyIcon');
    inputStateIconClickLister('saveDeepLApiKeyIcon', 'DEEPL_API_KEY', 'deepLApiKeyInput');

    setinputStateIcon('language', 'languageInput', 'saveLanguageIcon');
    inputLister('languageInput', 'saveLanguageIcon');
    inputStateIconClickLister('saveLanguageIcon', 'language', 'languageInput');

    // ここでルビのフォントサイズを変更します
    document.getElementById('fontSizeSlider').addEventListener('input', (e) => {
        const fontSize = e.target.value;
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                function(fontSize) {
                    document.querySelectorAll('rt').forEach((rt) => {
                        rt.style.fontSize = `${fontSize}px`;
                    });
                },
                args: [fontSize],
            });
        });
    });

    document.getElementById('toggle').addEventListener('change', function () {
        if (this.checked) {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { message: 'on' });
                chrome.storage.local.set({ power: true });
            });
        } else {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { message: 'off' });
                chrome.storage.local.set({ power: false });
            });
        }
    });
});
