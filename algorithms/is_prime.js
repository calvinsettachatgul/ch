/*
https://www.thatjsdude.com/interview/js1.html#isPrime
1. check Prime
Question: How would you verify a prime number?

Answer: a prime number is only divisible by itself and 1.
So, i will run a while loop and increase by 1. 
(look at the code example. If you dont get it. this is not your cake.
do learn javaScript basics and come back.)
*/

function isPrime (num) {
    let questionableFactor = 2;
    let result = true
    if(num === 2){
      result = true
    }
    else{
        for( let i = questionableFactor; i < num; i++){
            if(num % questionableFactor === 0){
                result = false;
            }
        }
    }
    return result
}

module.exports = isPrime;

// this will be O(N) because we have one for loop