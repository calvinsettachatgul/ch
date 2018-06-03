console.log("this is person methods");

let PersonMethods = {
  "hello": function(){ 
                  return "hello this is me"
           }
}

PersonMethods.goodbye = function(){
    return "goodbye from me " + this.firstName;
}

module.exports = PersonMethods;
