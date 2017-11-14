// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var height = $('#input_height').val();
  var width = $('#input_width').val();
  var content = '<tbody>';
  for(var i=0; i<height; i++){
      content += '<tr>';
      for (var j=0; j<width; j++) {
        content += '<td onclick="function()"></td>';
      }
      content += '</tr>';
  }
  content += '</tbody>';

  document.getElementById('pixel_canvas').innerHTML = content;
  $('#clear').remove();
  $('#pixel_canvas').after('<input type="button" value="Clear" id="clear">');
  $( function() {
    var color =
    $('td').click( function() {
        if($(this).attr('style'))
      $(this).removeAttr('style');
        else
      $(this).css('background',  $('#colorPicker').val());
    } );
  } );
  $(function(){
    $('#clear').click(function(){
        $('td').each(function(){
          $(this).attr ('style', '');
        });
    });
  });
  return false;

};
