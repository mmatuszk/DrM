/*
 * File: content.js
 * Author: Marcin Matuszkiewicz - marcin@jewelmirror.com
 * 
 * Description: main content script
 * 
 */

// Load autoreplace map from chrome storage
AutoReplace.loadMap();
// Bind AutoReplace to main document and process all TEXTAREA elements
AutoReplace.init();

// Initilize KeybardShortcuts
KeyboardShortcuts.registerFunction('ga', HLLocations.goAssessments, 'Go to Assessements');
KeyboardShortcuts.registerFunction('gc', HLLocations.goClinic, 'Go to Clinic main page');
KeyboardShortcuts.registerFunction('gd', HLLocations.goDocuments, 'Go to Documents');
KeyboardShortcuts.registerFunction('gh', HLLocations.goHospital, 'Go to Hospital main page');
KeyboardShortcuts.registerFunction('gl', HLLocations.goLabResults, 'Go to Lab Results');
KeyboardShortcuts.registerFunction('gm', HLLocations.goHomeMedication, 'Go to Home Medications');
KeyboardShortcuts.registerFunction('gn', HLLocations.goChartNotes, 'Go to Chart Notes');
KeyboardShortcuts.registerFunction('go', HLLocations.goCPOE, 'Go to CPOE');
KeyboardShortcuts.registerFunction('gp', HLLocations.goProblem, 'Go to Problems');
KeyboardShortcuts.registerFunction('gs', HLLocations.goSurgery, 'Go to Surgeries');
KeyboardShortcuts.registerFunction('gt', HLLocations.goOrders, 'Go to Orders Tracking');
KeyboardShortcuts.registerFunction('gv', HLLocations.goVitalSigns, 'Go to Vital Signs');
KeyboardShortcuts.registerFunction('gw', HLLocations.goPhysicianWorkCenter, 'Go to Physician Work Center');
KeyboardShortcuts.registerFunction('q', WorkCenter.processOpenVisit, 'Move Transcription under "Sign" in open visits');
KeyboardShortcuts.registerFunction('z', WorkCenter.processResultsList, 'Add "Copy Name" button in Work Center Results');

KeyboardShortcuts.bind();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.cmd == "DisplayShorcutsHelp") {
      sendResponse({sMap: JSON.stringify(KeyboardShortcuts.getMap())});      
    }
  });