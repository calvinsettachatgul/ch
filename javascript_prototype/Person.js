// let's work with an Options hash

let Person = function(opts){
  this.firstName = opts.firstName;
  this.lastName = opts.lastName;
  this.email = opts.email;
}

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