window.onload = init;
/* global $*/

function init() {
  console.log("JavaScript is ready.");
  var button = $('#json');
  var helloWorldButton = $('#helloWorld');
  var helloWorld2Button = $('#helloWorld2');
  console.log(helloWorldButton)
  button.click(getJson);
  helloWorldButton.click(getHelloWorld);
  helloWorld2Button.click(getHelloWorld2);
};

let server_url = 'https://9342e3524f114d06a4a49fcd122b845c.vfs.cloud9.us-east-1.amazonaws.com/'

function getJson() {
  console.log("Got the JSON");
  
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

function getHelloWorld(){
  
  var $request = $.ajax(
    {
      dataType: 'json',
      type: 'GET',
      url: server_url + 'helloworld'
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
}

function getHelloWorld2(){
  let $request = $.ajax(
    {
      dataType: 'json',
      type: 'GET',
      url: server_url + 'helloworld2'
    }
  );
  
  $request.then(
    function(response) {
      console.log(response);
    },
    function(response){
      console.log(response);
    }
  )
};

