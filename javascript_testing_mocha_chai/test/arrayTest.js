let chai = require('chai')
var assert = chai.assert;
let expect = chai.expect;


describe('Array', function() {
  
  describe('Array#new', function(){
    it('should start empty', function() {
      var arr = [];
      assert.equal(arr.length, 0);
    });
  })

  describe('Array#push', function(){
    it('should push an element onto an array',function(){
      let arr = [];
      arr.push(1)
      assert.equal(JSON.stringify(arr),JSON.stringify([1]));
      assert.equal(arr.length,1);
      assert.equal(arr[0],1);
    });
  });
  describe('Array#pop', function(){
    it('should pop off the last element of an array', function(){
      let arr = [1];
      arr.pop();
      assert.equal(arr.length, 0);
      assert.equal(JSON.stringify(arr),JSON.stringify([]));
      assert.equal(arr[0],undefined);
  
    })
  })
  describe('elements', function(){
    it('should include a pet named Rover', function(){
      let arr = ["Simba", "Mufasa", "Rover", "Spot"];
      expect(arr).to.be.an('array').that.includes("Rover");
    })
  })
});






