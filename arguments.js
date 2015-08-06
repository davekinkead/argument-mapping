
//  Grab the selected text after an event
loadToolTip = function(e) {
  var selectedText = window.getSelection().toString();
    // remove any existing tool tip
    $('#tooltip').remove();  

    if (selectedText) {
      // now add a new one
      var toolTip = $('<div id="tooltip" class="tooltip"><span id="premise" title="Premise">P</span> <span id="conclusion" title="Conclusion">C</span> <span id="delete" title="Delete">D</span></div>').appendTo('body');
      var domBox = window.getSelection().getRangeAt(0).getBoundingClientRect();
      toolTip.css({'position': 'absolute', left: domBox.x + domBox.width/2 - 25, top: domBox.y-55});

      //  add the generate-map button
      var generateMapBtn = $('<div id="map-btn" class="tooltip"><a href="#">Generate Argument Map</a></div>').appendTo('body');
      generateMapBtn.css({'position': 'fixed', bottom: 25, right: 25});
  }
}



$(document).ready(function() {
  //  listen for mouseup on paragraphs
  $('p').mouseup(function(e) {
    loadToolTip(e);
  })
});