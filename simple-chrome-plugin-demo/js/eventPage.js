var flag = false;
var currentTabId;
chrome.browserAction.onClicked.addListener(function(tab) {
　　counter = 40;
　　console.log('Turning ' + tab.url);
　　flag = true;
　　currentTabId = tab.id;
　　chrome.tabs.getSelected(null, function(tab) {
　　　　sendMsg(tab.id);
　　});
});


chrome.webNavigation.onCompleted.addListener(function( tab ){
　　console.log('加载完成***' + tab.tabId );
　　if( flag ){
　　　　sendMsg( tab.tabId );
　　}
});

chrome.extension.onMessage.addListener(

function(request, sender, sendResponse) {
　　console.log("*******evenPage.js***chrome.extension.onMessage.addListener");
});