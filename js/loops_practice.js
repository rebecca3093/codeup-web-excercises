"use strict";

//practice w casey

/*let isAwesome = true
let incrementor = 0;
if (true) {
    console.log("Loop has ended");
}

while (incrementor >0 ){
    console.log(incrementor --);
}


let toFifty = 8;

if (true) {
    console.log("We have reached 50!");
}

while (toFifty <= 50){
    console.log(toFifty ++)
}

while (toFifty < 50){
    toFifty++
    if (toFifty % 2 === 0){
    console.log(toFifty);
}

}*/



//user imput
/*
let fullNameEntered = false;
let names = "";
// WE DON'T KNOW HOW MANY NAMES THEY HAVE!
while (!fullNameEntered){
    names += " "
    names += prompt("Please enter or add to your name");

    fullNameEntered = confirm("Is this your full name?");
}
alert("This is your name: " + names);*/

// do while loop

/*let fullNameEntered = false;
let names = "";
// WE DON'T KNOW HOW MANY NAMES THEY HAVE!
do{
    names += prompt("Please enter or add to your name");
    fullNameEntered = confirm("Is this your full name: "+ names");
    if (!fullNameEntered) {
        names += " ";
} while(!fullNameEntered)

alert("This is your name: " + names);*/


// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
// Let's assume that they are allowing two cars into the parking lot at a time. As those cars take up spaces,
// write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
// is now full" to the console.//

/*let incomingCars = 2;
let fullLott = 100

do (incomingCars < 100){
    console.log("Number of cars in the lot: " + incomingCars);
    i++;
}
while (incomingCars <= 100){
    console.log(incomingCars ++)
}

// Casey's Walk-thru

let numSpaces = 30
console.log("Welcome to the Garage!");

do{
    console.log("There are " + numSpaces + "remaining");
    numSpaces -= 2;
} while(numSpaces)
console.log("The parking garage is full!");*/



//TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
// correct password is given.

// Caseys Walk-thru

/*
let password = "123";
let isCorrect = false;
let attempt = " ";

while (!isCorrect){
    attempt = prompt("Please enter your password...");
    isCorrect = (attempt === password);
    if (!isCorrect){
        alert("Incorrect Password");
    }
}

alert("Correct!")*/
