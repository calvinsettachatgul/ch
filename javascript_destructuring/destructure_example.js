let first = "calvin";
let last = "settachatgul";


// es6 syntax using destructuring
// let calvinName = {
//     first, 
//     last
// }

let calvinName = {
    first: first,
    last: last,
}

calvinName.first = "calvin"
calvinName.last = "last"
// let {first, last} = calvinName // example of assignment of the variables// oppposite direction

console.log(calvinName);