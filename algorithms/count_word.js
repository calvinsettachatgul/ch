
//  this method will count the occurrences of a particular word
//  input
//      long string of words that is separated by spaces
//      target word
//  output
//     integer number of words that occur in the string

// def count_word(search, target)
  
//   # split the search string by space to get an array
//   # initialize a counter to 0 
//   # iterate and if the word === target then increment the counter
//   # return the counter
  
// end

// let sayHello = (name) => {
//     console.log(`hello my name is ${name}`)
// }

// sayHello('calvin');

let count_word = (search, target) => {
    // console.log(search);
    // console.log(target);
    
    let splitup = search.split(" ");
    // console.log(splitup)
    occur = 0;
    for(let i = 0; i < splitup.length; i++){
        if (target == splitup[i]){
            occur++
            // occur = occur + 1;
        }
    }
    // for(i=0; i < 0; i++)
    return occur;
}

let search = 'myword henry cat dog henry';
let target = 'henry'

console.log(count_word(search, target));


