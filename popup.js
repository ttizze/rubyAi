// popup.js
document.addEventListener('DOMContentLoaded', function() {

    // When the page is loaded, display the saved API key in the input field
    chrome.storage.local.get('api_key', function(result) {
        if (result.api_key) {
            document.getElementById('apiKey').value = result.api_key;
        }
    });

    chrome.storage.local.get('language', function(result) {
        if (result.language) {
            document.getElementById('languageInput').value = result.language;
        }
    });


    document.getElementById('saveApiKeyIcon').addEventListener('click', function() {
        let apiKey = document.getElementById('apiKey').value;
        chrome.storage.local.set({ api_key: apiKey });
        alert('API Key saved.');
    });


    document.getElementById('languageInput').addEventListener('input', function(e) {
        chrome.storage.local.set({ language: e.target.value });
    });

    document.getElementById('fontSizeSlider').addEventListener('input', function(e) {
        const fontSize = e.target.value;
        console.log(fontSize);
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
            });
        } else {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                let activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, {"message": "off"});
            });
        }
    });
});