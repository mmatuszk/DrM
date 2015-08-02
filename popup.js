/*
 * File: popup.js
 * Author: Marcin Matuszkiewicz - marcin@jewelmirror.com
 * 
 */

// $(document).ready(function() {
  // $('#idEnable').click(function(event) {
    // var $btn = $('#idEnable');
    // if ($btn.val() == 'Enabled') {
      // chrome.browserAction.setIcon({path: 'drm-disabled-38.png'});
      // $btn.val('Disabled');
      // $btn.toggleClass('disabled');
    // } else {
      // chrome.browserAction.setIcon({path: 'drm-enabled-38.png'});
      // $btn.val('Enabled');
      // $btn.toggleClass('disabled');
    // }
  // });  
// });

var Popup = (function() {
  var pub = {};
  
  // map is a serialized JSON objection
  var cbDisplayShorcutsHelp = function(response) {
    var bindingMap, $e, $tab;
    
    // if (reponse.sMap === 'undefined') {
      // return;
    // }
    
    bindingMap = JSON.parse(response.sMap);
    
    $e = $('#helpShortcuts');
    
    $tab = $e.append('<table></table>');
    $tab.append('<tr><td colspan="2" class="helpheader">Shortcuts</td><td></td></tr>');
    for (var cmd in bindingMap) {
      $tab.append('<tr><td class="helpshortcut">'+cmd+'</td><td>'+bindingMap[cmd].desc+'</td></tr>');
    }    
  };
  
  var onConfigAutoReplace = function(evt) {
    console.log('Try to configure autoreplace');
    chrome.runtime.sendMessage({cmd: "ConfigAutoReplace"});    
  };
  
  pub.loadShortcutsHelp = function() {
    // chrome.runtime.sendMessage({cmd: 'DisplayShorcutsHelp'}, cbDisplayShorcutsHelp);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {cmd: "DisplayShorcutsHelp"},  cbDisplayShorcutsHelp);
    });
  };
  
  pub.addConfigAutoReplace = function() {
    var $cfgAutoReplace;
    
    $cfgAutoReplace  = $('<input type="button" value="AutoReplace Config"/>');
    $cfgAutoReplace.click(onConfigAutoReplace);
    $('#configAutoReplace').append($cfgAutoReplace);
  };
  
  return pub;
})();

Popup.loadShortcutsHelp();
Popup.addConfigAutoReplace();
