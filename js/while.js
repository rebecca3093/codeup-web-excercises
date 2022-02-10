"use strict";

//While Loop

/*
let num = 2;

while (num <= 65536) {
console.log(num);
num *= 2;
}
*/


// Do While Loop

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    let iceCreamSold = Math.floor(Math.random() * 5) + 1;
    console.log(iceCreamSold + " " + "Have been sold");
    allCones -= iceCreamSold;
    console.log(allCones)
}
while (allCones > 1);
console.log("ALl the cones have been sold!")


