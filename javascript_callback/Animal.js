console.log("this is the Animal file")

let Animal = function(name, age){
    this.name = name;
    this.age = age;
}

Animal.prototype.error = function(error){
  console.log("Error: " + error); 
} 

Animal.prototype.eat = function(food){
    console.log(this.name + " ate " + food);
    return true;
};

var popcorn = new Animal("popcorn", 8);
var peewee = new Animal("peewee", 7);

console.log(popcorn);
console.log(peewee);

console.log("popcorn eat kibble");
popcorn.eat("kibble");
