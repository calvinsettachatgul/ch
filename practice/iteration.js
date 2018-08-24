// practicing iteration
// console.log('some iteration')
// // for loop

// let arr = ["hello", "there", "calvin"]

// function printElement(element){
//   console.log(element)
// }

// arr.forEach(printElement)

let fruit1 = {
  "name": "apple",
  "color": "red",
  "size": "medium"
}

let fruit2 = {
  "name": "banana",
  "color": "yellow",
  "size": "big"
}

let fruit3 = {
  "name": "grape",
  "color": "purple",
  "size": "small"
}

let fruits = [ fruit1, fruit2, fruit3]

// console.log(fruits)

// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]["name"]);
// };

let names = [];
for(let i=0; i < fruits.length; i++){
  names.push(fruits[i]["name"]);
}

console.log(names);