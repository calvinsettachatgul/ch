// for (var i = 0; i < Things.length; i++) {
//     Things[i]
// }

let children = ["Josh", "Mary", "Calvin", "Henry"];

for (var i = 0; i < children.length; i++) {
    console.log(children[i]);
};

// let foodNames = ['hotdog', 'pizza', 'burrito']
let foodNamesTasty = [['hotdog', 'tasty'], ['pizza','tasty'], 
                    ['burrito', 'tasty'], ['brocoli', 'not tasty']]

let foods = [{}, {}, {}, {}];

// food["name"] = 'hotdog'


for (var i = 0; i < foods.length; i++) {
    // foods[i]["name"] = foodNames[i];
    // assign the name and assign tasty to the objects
    let name = foodNamesTasty[i][0]
    let tasty = foodNamesTasty[i][1]
    foods[i]["name"] = name;
    foods[i]["tasty"] = tasty;
}

console.log(foods);