// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

// decide a parent and child class

// Worker and types of Workers

function Worker(energy, employed, disability){
    this.energy = energy;
    this.employed = employed;
    this.disability = disability;
}

function Janitor(energy, employed, disability) {
    Worker.call(this, energy, employed, disability);
    this.task = "mop";
    this.hours = "Full-time";
}

/// writing tests to see if Janitor inherits properties of Worker
// pass in all the values as arguments to the constructor

let jan1 = new Janitor("high", true, "none");
console.log(jan1.energy === "high")
console.log(jan1.employed === true)
console.log(jan1.disability === "none")
console.log(jan1.task === "mop")
console.log(jan1.hours === "Full-time")