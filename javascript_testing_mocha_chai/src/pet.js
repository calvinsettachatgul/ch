let Pet = function(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}

Pet.prototype.speak = function(){
  return "bark bark!";
}

Pet.prototype.toString = function(){
  return this.name.toString();
}

// let Rover = new Pet("Rover", "Golden Retriever", 2);
// let Fido = new Pet("Fido", "Chihuahua", 5)
// console.log(Rover.age === 2)
// console.log(Fido.age === 5)
// console.log(Rover.speak() === "bark bark!");

module.exports = Pet;