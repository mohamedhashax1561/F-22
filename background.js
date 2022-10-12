function block(url) {
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          return {cancel: details.url.indexOf(url) != -1};
        },
        {urls: ["<all_urls>"]},
        ["blocking"]
      );
}
block("logger")
block("trackjs")