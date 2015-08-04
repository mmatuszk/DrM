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
    } else if (request && request.cmd == 'copy') {
        var input = document.createElement('textarea');
        document.body.appendChild(input);
        input.value = request.text;
        input.focus();
        input.select();
        document.execCommand('Copy');
        input.remove();
    }
  });