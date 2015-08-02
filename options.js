/*
 * File: options.js
 * Author: Marcin Matuszkiewicz - marcin@jewelmirror.com
 * 
 */

function saveAutoReplaceOptions(map) {
  chrome.storage.sync.set( {"autoReplaceMap": map},
    function() {console.log('Saved');}
  );
}

function restoreAutoReplaceOptions() {
  chrome.storage.sync.get('autoReplaceMap',
    function(items) {
      console.log(items.autoReplaceMap);
      AutoReplaceUI.setMap(items.autoReplaceMap);
      AutoReplaceUI.display();
    }
  );
}

AutoReplaceUI.ok(saveAutoReplaceOptions);
AutoReplaceUI.cancel(restoreAutoReplaceOptions);
restoreAutoReplaceOptions();
