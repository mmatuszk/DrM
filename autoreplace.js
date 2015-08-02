/*
 * File: autoreplace.js
 * Author: Marcin Matuszkiewicz
 * 
 */

var AutoReplace = (function() {
  var replaceMap, enabled; 
  
  replaceMap = {};
  enabled = true;
  
  function onKeyPress(event) {
    var text, // text of the textarea
     newText, // text af the textarea ofter replace was performed
     ch,      // character that was pressed
     $e;      // jQuery element with focus

    if ($('TEXTAREA:focus').length == 1) {
      $e = $('TEXTAREA:focus');
    } else {
      return;
    }
    
    // Only autoreplace if follow character is a white space
    ch = String.fromCharCode(event.which);
    if (/\s/.test(ch) == false) {
      return;
    }
    
    
    text = $e.val();
        
    for (var k in replaceMap) {
      newText = text.replace(RegExp('\\b'+k+'$'), replaceMap[k]);
      console.log(newText);
      if (newText != text) {
        $(event.target).val(newText);
        break;  // once we found a match we can jump out of the loop
      }      
    }

  }
  
  var pub = {};  // public object returned
  
  pub.init = function ($e) {
    // $e.bind('keypress', onKeyPress);
    // $(document).keypress(onKeyPress);
    $(document).keypress(onKeyPress);
  };
  
  pub.setMap = function(newMap) {
    replaceMap = newMap;
  };
  
  pub.loadMap = function() {
    chrome.storage.sync.get('autoReplaceMap',
      function(items) {
        pub.setMap(items.autoReplaceMap);
        console.log(replaceMap);
      }
    );    
  };
  
  return pub;
}());
