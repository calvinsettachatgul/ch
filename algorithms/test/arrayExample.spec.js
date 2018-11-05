let chai = require('chai')
let mocha = require('mocha')
let assert = chai.assert;

describe('Array', function() {
    it('is a working test', function(){
        assert.equal(1, 1)
    })
    it('is not a working test not equal', function(){
        assert.notEqual(1, 0)
    })
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function(){
          assert.equal(-1, [1,2,3].indexOf(4));
      });
    });
});