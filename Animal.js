let Animal = function(name, age) {
  this.name = name;
  this.age = age;
  this.hungry = false; //this will be used in our eatIfHungry function
}

var popcorn = new Animal("popcorn", 7);
var keewee = new Animal("keewee", 8);

Animal.prototype.eat = function(food) {
  console.log(this.name + " ate " + food);
  return true
};

Animal.prototype.error = function(error){
  console.log("Error: " + error)
};

Animal.prototype.eatIfHungry = function(food, successCallback, errorCallback) {
  if(this.hungry) {
    successCallback(food); 
    this.eat(food);
  } else {
    errorCallback(food);
    this.error(food);
  }
};

var success = function(){
  console.log("executing success");
};

var error = function() {
  console.log("executig error");
}

console.log(popcorn);
console.log(keewee);

popcorn.eat("cheddar");

keewee.error("This wasn't cool enough!");

popcorn.hungry = true;
popcorn.eatIfHungry("cupcakes", success, error);

