window.onload = init;

function init(){
  console.log('javascript ready');
  var $buttonRoute1 = $('#route1');
  $buttonRoute1.click(getRoute1);
};

function getRoute1(){
  console.log('get data from route1');
   var $request = $.ajax(
     {
       dataType: 'json',
       type: 'GET',
       url: 'http://localhost:4567/route1',
     }
   );
   $request.then(
     function(response){
       console.log('success');
       console.log(response);
   },
     function(response){
       console.log("error")
       console.log(response);
     }
   )
}
  
