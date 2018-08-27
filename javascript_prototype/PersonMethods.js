console.log("This is Person methods.");

let PersonMethods = {
  "hello": function(){
    return "Hello, this is me.";

  }
}

PersonMethods.goodbye = function(){
    return "Goodbye from me, " + this.firstName;
}

module.exports = PersonMethods;
