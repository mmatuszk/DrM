/*
 * File: autoreplaceui.js
 * Author: Marcin Matuszkiewicz - marcin@jewelmirror.com
 */

var AutoReplaceUI = (function (){
  var $container, $findInput, $replaceInput, $add, $ok, $cancel;
  var map;
  
  $findInput = $('#arFind');
  $replaceInput = $('#arReplace');
  $add = $('#id_add');
  $ok = $('#id_ok');
  $cancel = $('#id_cancel');
  
  map = {}; 
  
  function setFindInput(text) {
    $findInput.val(text);
  }
  
  function getFindInput() {
    return $findInput.val();
  }
  
  function setReplaceInput(text) {
    $replaceInput.val(text);
  }
  
  function getReplaceInput() {
    return $replaceInput.val();
  }
  
  function onFindChange() {
    var find;
    
    find = getFindInput();
    
    if (find in map) {
      $add.val('Update');
    } else {
      $add.val('Add');
    }
  }
  
  function onAddUpdate() {
    var find, replace, $row;
    
    find = getFindInput();
    replace = getReplaceInput();
    
    map[find] = replace;
    
    pub.display();
    setFindInput('');
    setReplaceInput('');
    $findInput.focus();
    
    $add.val('Add');
  };
  
  function onClickRow(evt) {
    var $row, find, replace;
    
    $row = $(evt.target).parent();
    
    find = $row.children().eq(0).text();
    replace = $row.children().eq(1).text();
    setFindInput(find);
    setReplaceInput(replace);
    $add.val('Update');
  }
  
  function onDelete(evt) {
    var $row;
    var find;
    
    $row = $(this).closest('tr');
    find = $row.find('.find').text();
    delete map[find];
    $row.remove();
    
    pub.display();
  }

  var pub = {};
  
  pub.init = function($c) {
    $container = $c;
    $add.click(onAddUpdate);
    $findInput.change(onFindChange);
  };
  
  pub.setMap = function(newMap) {
    if (newMap === undefined || newMap === null) {
      map = {};
    } else {
      map = newMap;  
    }
  };

  pub.display = function() {
    var keys, find, replace;
    var $row, $b_delete;
    
    // remove curent rows
    $('#arInput input').first().parent().parent().siblings().remove();
    
    keys = Object.keys(map);
    keys.sort();
    
    for (var i = 0; i < keys.length; i++) {
      find = keys[i];
      replace = map[find];
      $row = $('<tr><td class="find">'+find+'</td><td class="replace">'+replace+'</td></tr>');
      $b_delete = $('<button><img src="img/b_drop.png"></button>');
      $b_delete.click(onDelete);
      $row.append($('<td></td>').append($b_delete));
      if (i % 2) {
        $row.addClass('row-alt');
      } else {
        $row.addClass('row');
      }
      $('#arInput').append($row);
      $row.click(onClickRow);      
    }
  };
  
  pub.ok = function(callback) {
    $ok.click(function(evt) {
      callback(map);
    });
  };
  
  pub.cancel = function(callback) {
    $cancel.click(function(evt) {
      callback();
    });
  };
  
  return pub;
})();

AutoReplaceUI.init($('#uiAutoReplace'));
// AutoReplaceUI.ok(function(map) {console.log(map);});
// AutoReplaceUI.cancel(function() {console.log('Cancel');});
