let Pet = function(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}

Pet.prototype.toHTML = function(){
  let result = '<h1>' + this.name + '</h1>'
  result += '<ul>'
  let petKeys = Object.keys(this)
  for( let i = 0; i < petKeys.length; i++){
    result += '<li>' + this[petKeys[i]] + '</li>';
  }
  result += '</ul>';
  return result;
}

Pet.prototype.toString = function(){
  return this.name.toString();
}

Pet.prototype.speak = function(){
  return "bark bark!";
}

let Rover = new Pet("Rover", "Golden Retriever", 2);
let Fido = new Pet("Fido", "Chihuahua", 5)
console.log(Rover.age === 2)
console.log(Fido.age === 5)
console.log(Rover.speak() === "bark bark!");

module.exports = Pet;