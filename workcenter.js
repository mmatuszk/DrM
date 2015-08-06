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
  
  function onClickCopyResultsList(e) {
    var res, str;
    var $table, $tbody, $panelResults, $results;
    
    $table = $(e.target).parent().parent().next().find('table');
    $tbody = $table.find('tbody');
    $panelResults = $tbody.filter(function(){
      var $attr = $(this).attr('id');
      if( $attr && $attr.match(/Panel-\d\d\d\d\d/) ) {
        return true;}
      }).find('label');
      
    res = [];
    for (var i = 0; i < $panelResults.length; i++) {
      res[res.length] = $panelResults.eq(i).text().trim();
    }
    
    $results = $table.find('.TestName:not(.panelColumn):not(.panelborder)');
    for (var i = 0; i < $results.length; i++) {
      res[res.length] = $results.eq(i).text().trim();
    }
    
    str = "";
    for (var i = 0; i < res.length; i++) {
      str += res[i];
      if (i < res.length-1) {
        str += ", "; 
      }
    }
    
    GM_setClipboard(str);
  }

  var pub = {};

  pub.processResultsList = function() {
    var $links, $btn;
    
    $links = $('.action-bar').children('.links');
    
    // i = 1 - start from 2nd element
    for (var i = 1; i < $links.length; i++) {
      if ($links.eq(i).find('.copyname').length == 0) {
        // only add the button if not already there
        // only add the button if not already there
        $btn = $('<input type="button" class="copyname" value="Copy Name" />');
        // $btn = $('<a href="#" onclick="onClickCopyName()" class="copyname">Copy Name</a>');
        $links.eq(i).prepend($btn);
        $btn.click(onClickCopyName);
        
        $btn = $('<input type="button" class="copyresults" value="Copy Results" />');
        // $btn = $('<a href="#" onclick="onClickCopyResultsList()" class="copyresults">Copy Results</a>');
        $links.eq(i).prepend($btn);
        $btn.click(onClickCopyResultsList);      
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
