// testing sumArray.js

let chai = require('chai')
let mocha = require('mocha')
let assert = chai.assert;

let sumArray = require('../sumArray');

describe('#sumArray', function(){
    
    context('when the input is null', function(){
        it('should return a sum of 0', function(){
            let nullInput = null;
            assert.equal(sumArray(nullInput), 0);
        })
    })
    
    context('when the input is size 0 empty array', function(){
        it('should return a sum of 0', function(){
            let emptyArr = [];
            assert.equal(sumArray(emptyArr), 0);
        })
    })
    
    context('when the input is size 1 ', function(){
        it('should return the correct sum', function(){
            let inputArr = [2];
            assert.equal(sumArray(inputArr), 2);
        })
    })
    
    
    it('should add the elements of the array', function(){
        let testArr = [1,2,3];
        assert.equal(sumArray(testArr), 6);
    })
})