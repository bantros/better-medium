chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      message: 'changeInfo.url',
      url: changeInfo.url
    });
  }
});
