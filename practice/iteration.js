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

let sizes = [];

for(let i = 0; i < fruits.length; i++){
  sizes.push(fruits[i]["size"]);
}

console.log(sizes);

let colors = [];
let red = "red"
let length = red.length;

for(let i = 0; i < fruits.length; i++){
  // I want to iterate through the fruits
  // if(colors[i]["color"].length > length ){
  // if( string > 3characters)
  if( fruits[i]["color"].length > length ){
    colors.push(fruits[i]["color"])
  }
  
  // condition to push is the string is longer than 3 characters
  // condition
   
  //at each iteration I want to push the fruits into the colors array
  // work
}

console.log(colors);