let Animal = function(name, age){
    this.name = name;
    this.age = age;
    this.hungry = false;
}

Animal.prototype.eatIfHungry = function(food, successCallback, errorCallback){
    if(this.hungry){
      successCallback(food);       
      this.eat(food);
    }
    else{
      errorCallback(food);
      this.error(food);
    }
};

var success = function(){
    console.log("executing success");
}
var error = function(){
    console.log("executing error");
}

Animal.prototype.error = function(error){
  console.log("Error: " + error);
};

Animal.prototype.eat = function(food){
    console.log(this.name + " ate " + food);
    return true;
};

var popcorn = new Animal("popcorn", 8);
var peewee = new Animal("peewee", 7);

console.log(popcorn);
console.log(peewee);

console.log("Executing the following: popcorn.eat('kibble')");
popcorn.eat("kibble");

popcorn.eatIfHungry("cupcakes", success, error);

popcorn.hungry = true;

popcorn.eatIfHungry("cupcakes", success, error);
