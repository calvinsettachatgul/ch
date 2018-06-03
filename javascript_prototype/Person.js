
// lets work with an options hash

let PersonMethods = require('./PersonMethods');

let Person = function(opts){
  this.firstName = opts.firstName;
  this.lastName = opts.lastName;
  this.email = opts.email;
}

Person.prototype.hello = PersonMethods.hello;
Person.prototype.goodbye = PersonMethods.goodbye;

// driver code
//
let calvinOpts = {
    "firstName": "Cal",
    "lastName": "Set",
    "email": "cs@example.com",

}
let henOpts = {
    "firstName": "Hen",
    "lastName": "Veg",
    "email": "hv@example.com",
}

let cal = new Person(calvinOpts);
let hen = new Person(henOpts);

console.log(cal.firstName === "Cal");
console.log(hen.firstName === "Hen");
console.log(cal.hello() === "hello this is me");
console.log(cal.goodbye() === "goodbye from me Cal");
