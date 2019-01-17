console.log('loading background script');

var callback = function(details) {
    //alert("hello");
    console.log(details)
};
var filter = {urls: ["<all_urls>"]};
var opt_extraInfoSpec = [];

/*try {
  chrome.extension.getBackgroundPage().console.log(`http://localhost:3000/login?redirectURI=https://${chrome.runtime.id}.chromiumapp.org`)
  chrome.identity.launchWebAuthFlow(
    { url: `http://localhost:3000/login?redirectURI=https://${chrome.runtime.id}.chromiumapp.org`, interactive: true },
    (redirectURL) => {
      chrome.extension.getBackgroundPage().console.log('result', redirectURL);
    });
} catch (err) {
  console.error(err);
}*/

//chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);

/*chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log('test');
    if(details.url === 'http://localhost:9763/api/v1/visits'){
      console.log('test')
    }
  }
  //{urls: ["*://localhost:9763/api/v1/*"]},
  //["blocking"]
);

var counter = 0;
chrome.browserAction.onClicked.addListener(function (tab) {
  console.log(counter)
    counter++;
    if (counter == 5) {
        alert("Hey !!! You have clicked five times");
    }
});*/
