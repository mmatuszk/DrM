/*
 * File: background.js
 * Author: Marcin Matuszkiewicz - marcin@jewelmirror.com
 * 
 */

// Place hoder

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.cmd == "ConfigAutoReplace") {
      console.log('Config Auto Replace')
    }
  });