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
  
  let server_url = 'https://9342e3524f114d06a4a49fcd122b845c.vfs.cloud9.us-east-1.amazonaws.com/'
  var $request = $.ajax(
    {
      dataType: 'json',
      type: 'GET',
      url: server_url + 'json'
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

