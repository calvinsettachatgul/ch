let chai = require('chai');
let assert = chai.assert;
let Pet = require("../src/pet.js");

describe('Pet#new', function(){
  it('should have properties name, breed, and age', function(){
    let rover = new Pet("Rover", "Golden Retriever", 5);
    assert.equal(rover.name, "Rover");
    assert.equal(rover.breed, "Golden Retriever");
    assert.equal(rover.age, 5);
  });
});

describe('Pet#speak', function(){
  it('should return bark bark', function(){
    let testPet = new Pet("testName", "testBreed", 1);
    assert.equal(testPet.speak(), "bark bark!");
  });
});

describe('Pet#toString', function() {
  it('should return a string', function(){
    let fido = new Pet("Fido", "Chihuahua", 8);
    assert.equal(fido.toString(), "Fido");
  })
})
