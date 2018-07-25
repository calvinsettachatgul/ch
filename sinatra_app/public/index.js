window.onload = init;
/* global $*/

function init() {
  console.log("JavaScript is ready.");
  var button = $('#json');
  console.log(button);
  button.click(getJson);
};

function getJson() {
  console.log("Got to JSON");
  var $request = $.ajax(
    {
      dataType: 'json',
      type: 'GET',
      url: 'http://localhost:4567/json'
    }
  );

  $request.then(
    function (response) {
      console.log(response);
    },
    function (response) {
      console.log(response);
    }

  )
};

