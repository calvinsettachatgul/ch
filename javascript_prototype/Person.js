// let's work with an Options hash

let PersonMethods = require('./PersonMethods');
console.log(PersonMethods);
PersonMethods.hello();

let Person = function(opts){
  this.firstName = opts.firstName;
  this.lastName = opts.lastName;
  this.email = opts.email;
}

Person.prototype.hello = PersonMethods.hello;
Person.prototype.goodbye = PersonMethods.goodbye;

//driver code
let henryOpts = {
  "firstName": "Henry",
  "lastName": "Vega",
  "email": "hv@g.com"
}

let calvinOpts = {
  "firstName": "Calvin",
  "lastName": "Set",
  "email": "set@g.com"
}

let hen = new Person(henryOpts);
let cal = new Person(calvinOpts);

console.log(hen.firstName === "Henry");
console.log(cal.firstName === "Calvin");

console.log(hen.hello() === "Hello, this is me.");
console.log(hen.goodbye() === "Goodbye from me, Henry");