/*
 * File: shorctus.js
 * Author: Marcin Matuszkiewicz - marcin@jewelmirro.com
 */

var KeyboardShortcuts = (function() {
  var state, ch, bindingMap;
  
  state = '';
  bindingMap = {};
  
  var pub = {};
  
  pub.registerFunction = function(st, f, d) {
    bindingMap[st] = {'func': f, 'desc': d};
  };
  
  pub.getMap = function() {
    return bindingMap;
  };

  pub.onKeyPress = function (e) {
    // disable hotkeys if focused on a form control
   if ($('INPUT:focus, SELECT:focus, TEXTAREA:focus').length){
     return;
   }
 
    
    ch = String.fromCharCode(e.which).toLowerCase();
    
    state += ch;
    
    if (state in bindingMap) {
      bindingMap[state].func();
      state = "";
    }
    
    setTimeout(function() {
      state = "";
    }, 1000);
    
    // $('#status').html(state);
  };
  
  pub.onKeyDown = function(e) {
    if (e.which == 27) {  // ESC resets the state
      state = "";
      $('#status').html(state);
    }
    console.log(e.which);
  };
  
  pub.bind = function() {
    $(document).keypress(KeyboardShortcuts.onKeyPress);
    $(document).keydown(KeyboardShortcuts.onKeyDown);    
  };
  
  return pub;
})();

// KeyboardShortcuts.registerFunction('ga', function () {console.log('Go to assesments'); }, "Go to Assessments");
// KeyboardShortcuts.registerFunction('gp', function () {console.log('Go to problems'); }, "Go to Problems");
// KeyboardShortcuts.registerFunction('gg', HLLocations.goGoogle, 'Go to google.com');
// KeyboardShortcuts.bind();
