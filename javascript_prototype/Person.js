// lets work with an options hash
//
let Person = function(opts){
  this.firstName = opts.firstName;
  this.lastName = opts.lastName;
  this.email = opts.email;
}

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

