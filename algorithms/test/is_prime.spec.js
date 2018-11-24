let mocha = require('mocha');
let assert = require('assert');
let chai = require('chai').expect

let isPrime = require('../is_prime.js');

describe.only('#isPrime', function () {
  context('A number is prime', function () {
    context('number is small', function(){
      it('it should return true for input 2', function () {
        assert.equal(isPrime(2), true);
      });
      it('it should return true for input 3', function () {
        assert.equal(isPrime(4), false);
      });
      it('it should return true for input 4', function () {
        assert.equal(isPrime(4), false);
      });
      it('it should return true for input 6', function () {
        assert.equal(isPrime(6), false);
      });
      it('it should return true for input 7', function () {
        assert.equal(isPrime(7), true);
      });
    });
    context('when number is bigger', function(){
      context('when number is prime', function(){
        it('it should return true for 13', function () {
          assert.equal(isPrime(13), true);
        });
        
        it('it should return true for 101', function () {
          assert.equal(isPrime(101), true);
        });
        
      })
      context('when number is not prime', function(){
        it('it should return false for 102', function () {
          assert.equal(isPrime(102), false);
        });
        
      })
    })
  });
});
