
/* global $*/
$(document).ready(function(){
  let $button = $('#changemeButton');
  $button.click(changeText)
});

function changeText(){
  let $input = $('#changemeInput');
  let newText = $input.val();
  let $textToChange = $("#changemeText")
  $textToChange.text(newText)
}