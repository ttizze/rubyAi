// popup.js
document.addEventListener('DOMContentLoaded', function() {

    //storageから値を取得して表示する
    function getStorageItem(item, inputId, iconId) {
        chrome.storage.local.get(item, function(result) {
            if (result[item]) {
                document.getElementById(inputId).value = result[item];
                if (iconId) {
                    document.getElementById(iconId).src = '/images/checked.png';
                }
            } else {
                if (iconId) {
                    document.getElementById(iconId).src = '/images/send.png';
                }
            }
        });
    }

    function setInputListener(inputId, iconId) {
        document.getElementById(inputId).oninput = function() {
            document.getElementById(iconId).src = '/images/send.png';
        }
    }

    function setIconClickListener(iconId, item, inputId) {
        document.getElementById(iconId).addEventListener('click', function() {
            var inputElement = document.getElementById(inputId);
            if (inputElement.value && inputElement.value !== '') {
                chrome.storage.local.set({ [item]: inputElement.value});
                this.classList.add('animate');
                this.addEventListener('animationend', function() {
                    this.classList.remove('animate');
                    this.src = '/images/checked.png';
                }, {once: true}); // イベントリスナーは一度だけ実行されます
            } else {
                alert('Please enter a value.');
            }
        });
    }

    getStorageItem('api_key', 'apiKeyInput', 'saveApiKeyIcon');
    setInputListener('apiKeyInput', 'saveApiKeyIcon');
    setIconClickListener('saveApiKeyIcon', 'api_key', 'apiKeyInput');

    getStorageItem('language', 'languageInput', 'saveLanguageIcon');
    setInputListener('languageInput', 'saveLanguageIcon');
    setIconClickListener('saveLanguageIcon', 'language', 'languageInput');

    chrome.storage.local.get('power', function(result) {
        if (result.power) {
            document.getElementById('toggle').checked = true;
        }else{
            document.getElementById('toggle').checked = false;
        }
    });


    // ここでルビのフォントサイズを変更します
    document.getElementById('fontSizeSlider').addEventListener('input', function(e) {
        const fontSize = e.target.value;
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

});