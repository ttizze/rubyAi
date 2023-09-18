// popup.js
document.addEventListener('DOMContentLoaded', function() {

    // When the page is loaded, display the saved API key in the input field
    chrome.storage.local.get('api_key', function(result) {
        if (result.api_key) {
            document.getElementById('apiKeyInput').value = result.api_key;
            document.getElementById('saveApiKeyIcon').src = '/images/checked.png';
        } else {
            document.getElementById('saveApiKeyIcon').src = '/images/send.png';
        }
    });


    chrome.storage.local.get('language', function(result) {
        if (result.language) {
            document.getElementById('languageInput').value = result.language;
            document.getElementById('saveLanguageIcon').src = '/images/checked.png';
        } else {
            document.getElementById('saveLanguageIcon').src = '/images/send.png';
        }
    });

    chrome.storage.local.get('power', function(result) {
        if (result.power) {
            document.getElementById('toggle').checked = result.power;
        }
    });


    document.getElementById('saveApiKeyIcon').addEventListener('click', function() {
        chrome.storage.local.set({ api_key: document.getElementById('apiKeyInput').value});
    });

    document.getElementById('apiKeyInput').oninput = function() {
        document.getElementById('saveApiKeyIcon').src = '/images/send.png';
    }

    document.getElementById('languageInput').oninput = function() {
        document.getElementById('saveLanguageIcon').src = '/images/send.png';
    }


    document.getElementById('saveLanguageIcon').addEventListener('click', function() {
        chrome.storage.local.set({ language: document.getElementById('languageInput').value});
    });

    document.getElementById('fontSizeSlider').addEventListener('input', function(e) {
        const fontSize = e.target.value;
        // ここでルビのフォントサイズを変更します
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: {tabId: activeTab.id},
                function: function(fontSize) {
                    document.querySelectorAll('rt').forEach((rt) => { 
                        rt.style.fontSize = fontSize + 'px'; 
                    });
                },
                args: [fontSize]
            });
        });
    });

    document.getElementById('toggle').addEventListener('change', function() {
        if (this.checked) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                let activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, {"message": "on"});
                chrome.storage.local.set({ power: true });
            });
        } else {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                let activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, {"message": "off"});
                chrome.storage.local.set({ power: false });
            });
        }
    });

    let saveIcons = document.getElementsByClassName('saveIcon');
    for (let i = 0; i < saveIcons.length; i++) {
        saveIcons[i].addEventListener('click', function() {
            this.classList.add('animate');
            this.addEventListener('animationend', function() {
                this.classList.remove('animate');
                this.src = '/images/checked.png';
            }, {once: true}); // イベントリスナーは一度だけ実行されます
        });
    }
});