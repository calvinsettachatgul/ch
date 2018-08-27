// ruby has an each method for arrays

// javascript its forEach

// callback

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

let printMe = (element) => {
    console.log(element);
}

//forEach is a method on array that takes a callback and executes it for each element in the array

fruits.forEach(printMe)

// printMe // reference to function

// printMe(element);
