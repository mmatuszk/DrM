/*
 * File: tools.js
 * Author: Marcin Matuszkiewicz
 * 
 * Helper functions to be used across content scripts
 * 
 */

function GM_setClipboard(text) {
  var msg = {};
  
  msg.type = 'copy';
  msg.text = text;
  chrome.runtime.sendMessage(msg);
}