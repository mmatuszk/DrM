/*
 * File: workcenter.js
 * Author: Marcin Matuszkiewicz
 * 
 */

var WorkCenter = (function() {
  
  function onClickCopyName(e) {
      var html, name, lname, fname;
      html = $(e.target).parent().siblings('legend').html();
      name = html.split('-')[0].trim();
      lname = name.split(',')[0].trim();
      fname = name.split(',')[1].trim().split(' ')[0].trim();
      GM_setClipboard(lname+', '+fname);
  }

  var pub = {};

  pub.processResultsList = function() {
    var $links, $btn;
    
    $links = $('.action-bar').children('.links');
    
    // i = 1 - start from 2nd element
    for (var i = 1; i < $links.length; i++) {
      if ($links.eq(i).find('.copyname').length == 0) {
        // only add the button if not already there
        $btn = $links.eq(i).prepend('<input type="button" class="copyname" value="Copy Name" />');
        $btn .click(onClickCopyName);      
      }
    }
  };
  
  pub.processOpenVisit = function() {
    var $e; 
    
    $e = $('.segment:contains(Transcribed Notes)');
    if ($e.length == 1) {
        console.log($e);
        console.log('removing');
        $e.remove();
        //$('#ClinicalSummary-expandable-section').prepend($e);
        $('#rightSide').prepend($e);
    }    
  };  
  
  return pub;
})(); 