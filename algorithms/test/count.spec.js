let countFrequency = require('../count')
let chai = require('chai')
let mocha = require('mocha')
let assert = chai.assert;
let expect = chai.expect;
let should = chai.should();

// input null
// output null

// input []
// ouptut {}

// input [1,2,3]
// output {1:1, 2:1, 3:1}

// export count from count.js
// import count from this file spec file
// write a test that makes sure when we pass in null we get null back

describe('#countFrequency',function(){
    context('we get bad input in the case of null value', function(){
        it("should return a null value when we input null value", function(){
            assert.equal(countFrequency(null), null);
        });
    });
    context('when the input array is empty, arr equals []', function(){
        it("should return an empty javacript object", function(){
            assert.equal(JSON.stringify(countFrequency([])), JSON.stringify({}));
        });
    });
    context('when the array has numbers', function(){
        it("should return a javacript object with the elements as keys and frequency as values", function(){
            let arrInput = [1,1,2,3,3,3]
            let actual = countFrequency(arrInput)
            let expected = {
                1: 2,
                2: 1,
                3: 3
            }
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
            assert.equal(actual[1], 2);
            assert.equal(actual[2], 1);
            assert.equal(actual[3], 3);
            expect(actual).to.not.have.property(4);
            actual.should.be.a('object');
        });
    });
});
