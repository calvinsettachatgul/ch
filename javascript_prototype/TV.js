let TV = function(internet, bluetooth, pictureQuality){
    this.internet = internet;
    this.bluetooth = bluetooth;
    this.pictureQuality = pictureQuality;
}

// object = {
//     key: value,
//     key2: value2,
    
// }

let Samsung = new TV(true, true, "4K");
let Panasonic = new TV(false, true, "1080p");

// print whether or not the object that you created has interet

// print samsungs interet property is true
console.log(Samsung.internet == true)
console.log(Samsung.bluetooth== true)
console.log(Samsung.pictureQuality== "4K")

TV.prototype.mirrorPhone = function() {
    console.log("You're viewing your phone on the TV screen");
    return "yes"
}

console.log(Samsung.mirrorPhone()== "yes")
console.log(Panasonic.mirrorPhone()== "yes")
