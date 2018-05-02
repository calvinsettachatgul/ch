function Person(first, last, email){
  this.first = first;
  this.last = last;
  this.email = email;
}

let calvin = new Person("calvin", "settachatgul", "calvin.settachatgul@gmail.com")

let henry = new Person("henry", "vega", "henry.vega@example.com")

console.log("this is calvin");
console.log(calvin);

console.log("this is henry");
console.log(henry);

// calvin.sayName = function(){
//   console.log("hello my name is " + this.first + " " +  this.last);
// }

Person.prototype.sayName = function(){
  console.log("hello my name is " + this.first + " " +  this.last);
}


console.log("calvin.sayName");
calvin.sayName();

module.exports.Person = Person;

/* 

the contstrutor function defines the properties that the objects will have 
by taking arguments and then assigning 
this.property_name = argument;

when you make functions on objects  
we usually wan to put them on the prototype
of the constructor function 

what we also did was we 
we defined Person as a module and imported the module in node

we created people from the Person constructor function in the node repl

module.exports.Person

in the node repl

var personModule = require('./person.js')

*/
