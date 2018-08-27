// take a call back

// the call back has to return something

let overHead = 1.25

let unitPrice = (originalPrice) => {
 return originalPrice * overHead; 
}

let fruit1 = {
  "name": "apple",
  "color": "red",
  "size": "medium",
  "originalPrice": 1.50
  
}

let fruit2 = {
  "name": "banana",
  "color": "yellow",
  "size": "big",
  "originalPrice": 1.30
}

let fruit3 = {
  "name": "grape",
  "color": "purple",
  "size": "small",
  "originalPrice": 1.10
}




let fruits = [ fruit1, fruit2, fruit3]

let changeFruitObjectToName = (fruitObject) => {
    return fruitObject.name
}

let changeFruitObjectToSize = (fruitObj) => {
    return fruitObj.size
}

let changeFruitObjectToColor = (fruit) => {
    return fruit.color
}

let changeFruitAddSold = (fruit) => {
  fruit.sold = false;
  return fruit;
}

// let changeFruitToProfit = (fruit) => {
//     let profit = fruit * 1.25;
// }

let addUnitPrice = (fruit) => {
   fruit.price = unitPrice(fruit.originalPrice);
   return fruit;
}

// then use map to add the price to each fruit

let newPricedFruits = fruits.map(addUnitPrice)

let newFruitsAddSold = fruits.map(changeFruitAddSold)

console.log(newFruitsAddSold);


let fruitNames = fruits.map(changeFruitObjectToName);

let fruitSize = fruits.map(changeFruitObjectToSize);

let fruitColors = fruits.map(changeFruitObjectToColor);

// let fruitProfit = fruits.map(changeFruitToProfit);

// console.log(fruitNames);
// console.log(fruitSize);
// console.log(fruitColors);
// console.log(fruitProfit);