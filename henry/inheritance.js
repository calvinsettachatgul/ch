//this is practice for inheritance and pseudocoding

//My less specific object is a general Business
function Business(size, profits, numberOfProducts){
    this.size = size;
    this.profits = profits;
    this.numberOfProducts = numberOfProducts;
}

//My Restaurant object is inheriting the attributes of the Business object
function Restaurant(size, profits, numberOfProducts, restaurantStyle, chain){
    Business.call(this, size, profits, numberOfProducts);
    this.restaurantStyle = restaurantStyle;
    this.chain = chain;
}

//I'm going to create a Restaurant using every attribute to see inheritance work
let InNOut = new Restaurant("medium", "high", 10, "Burgers", true);
console.log(InNOut);
console.log(InNOut.size === "medium");
console.log(InNOut.profits === "high");
console.log(InNOut.numberOfProducts === 10);
console.log(InNOut.restaurantStyle === "Burgers");
console.log(InNOut.chain === true);

I was successful
Results:
/*Restaurant {
  size: 'medium',
  profits: 'high',
  numberOfProducts: 10,
  restaurantStyle: 'Burgers',
chain: true }
true
true
true
true
true*/