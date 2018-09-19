let Animal = function(species, breed, color){
  this.species = species;
  this.breed = breed;
  this.color = color;
};

let ed = new Animal("horse", "stallion", "black");
console.log(ed);
console.log(ed.species);
console.log(ed.breed);
console.log(ed.color);
console.log(Object.keys(ed))

for(i = 0; i < Object.keys(ed).length; i++){
  let key = Object.keys(ed)[i];
  console.log(ed[key]);
}

