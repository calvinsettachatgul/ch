let chai = require('chai');
let should = chai.should();
let assert = chai.assert;
let Pet = require("../src/pet.js");

describe('Pet#new', function(){
  it('should have properties name, breed, and age', function(){
    let rover = new Pet("Rover", "Golden Retriever", 5);
    assert.equal(rover.name, "Rover");
    assert.equal(rover.breed, "Golden Retriever");
    // console.log(rover.breed);
    assert.equal(rover.age, 5);
  });
  
  it('should produce a pet object', function(){
    // write a test here
    let rover = new Pet("Rover", "Golden Retriever", 5);
    rover.name.should.be.a('string');
    rover.should.be.a('object');
    rover.should.have.property('age');
    let roverConstructName = rover.constructor.name
    roverConstructName.should.equal('Pet')
  })
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
