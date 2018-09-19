// for (var i = 0; i < Things.length; i++) {
//     Things[i]
// }

// let children = ["Josh", "Mary", "Calvin", "Henry"];

// for (var i = 0; i < children.length; i++) {
//     console.log(children[i]);
// };

// let foodNames = ['hotdog', 'pizza', 'burrito']
// let foodNamesTasty = [['hotdog', 'tasty'], ['pizza','tasty'], 
//                     ['burrito', 'tasty'], ['brocoli', 'not tasty']]

// let foods = [{}, {}, {}, {}];

// // food["name"] = 'hotdog'


// for (var i = 0; i < foods.length; i++) {
//     // foods[i]["name"] = foodNames[i];
//     // assign the name and assign tasty to the objects
//     let name = foodNamesTasty[i][0]
//     let tasty = foodNamesTasty[i][1]
//     foods[i]["name"] = name;
//     foods[i]["tasty"] = tasty;
// }

// console.log(foods);

// let petsBehaved = [["dog", "good"], ["cat", "mean"], ["bird", "loud"]];
// let pets = [{}, {}, {}];

// for(let i=0; i < petsBehaved.length; i++){
//     let pet = petsBehaved[i][0];
//     let behaved = petsBehaved[i][1];
//     pets[i]["pet"] = pet;
//     pets[i]["behavior"] = behaved;
// }

// console.log(pets);

let stuff = [[1,2,3,4], ["Mary Bobby", "Henry"], [true, true, false], [1.2, 3.5, 5.7]]

let compiled = []

for(let i = 0; i < stuff.length; i++){
    for(let j = 0; j < stuff[i].length; j++)
        compiled.push(stuff[i][j])
}

// print whether or
console.log(compiled)
