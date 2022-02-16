"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



function analyzeColor(colors){
    if (colors === "red") {
        return console.log("apples are red");
     } else if (colors === "orange") {
        return console.log("pumpkins are orange");
     } else if (colors === "yellow") {
        return console.log("sunflowers are yellow");
     } else if (colors === "green"){
        return console.log("the grass is green")
     } else if (colors === "blue"){
        return console.log("the sky is blue");
     } else if (colors === "indigo"){
        return console.log("your jeans are indigo");
     } else if (colors === "violet"){
        return console.log("lavender is a shade of violet");
    } else
        return console.log("We did not enter a color")
}


analyzeColor("yellow");



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
/*var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];*/
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/*analyzeColor(randomColor);*/


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/*function analyzeColor(colors){
   switch (colors) {
       case "red":
           return ("apples are red");
           break;
       case "orange":
           return ("pumpkins are orange");
           break;
       case "yellow":
          return ("sunflowers are yellow")
           break;
       case "green":
           return ("the grass is green")
           break;
       case "blue":
           return ("the sky is blue");
           break;
       case "indigo":
           return ("your jeans are blue");
           break;
       case "violet":
           return ("lavender is a shade of violet");
           break;
   }
}

analyzeColor("yellow");*/



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/*let confirmColor= prompt("Please type in a color");

alert (analyzeColor(confirmColor));*/

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/*

function calculateTotal(luckyNumber, totalAmount) {
    let precentageOff;
    if (luckyNumber = 0)
    precentageOff = 0.00;{
    } else if (luckyNumber = 1) {
        precentageOff = 1
    } else if (2 === (totalAmount === 35 / 100)) {
        console.log("Here is 35% off!")
    } else if (4 === (totalAmount === 50 / 100)) {
        console.log("Here is 50% off!")
    } else {
        false
    }
        console.log("Everything is completely free!");
}

var discountTotal = totalAmount * precentageOff;
return totalAmount - discountTotal

calculateTota;(luckyNumber,100.00);

*/






/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
/*var luckyNumber = Math.floor(Math.random() * 6);

let totalbill = prompt("What is your total bill?");
alert("Lucky number is: " + luckyNumber);
alert("Your total today is: $ "+calculateTotal(luckyNumber,totalbill));

(luckyNumber);
calculateTotal(luckyNumber, 100);*/

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//REMEMBER!!!
//true - confirm
//false - cancel


/*
let userChoice = confirm("Would you like to enter a number?");

if (userChoice){
    //number things. Even or Odd
    var userNumber = parseFloat (prompt("Enter a number please: ")
    //# or not
    if (NaN(userNumb))
        alert("Not a number");
    //even or odd
    if (userNumber % 2 === 0
        alert("Your # is even");
} else {
    alert "No? Goodbye.");
}
//plus 100
alert("Your number pluss 100 is:" + (userNumber + 100));

if (userChoice){
    //number things. Even or Odd
    var userNumber = prompt("Enter a number please: ")
    if (userNumber % 2 === 0)
        alert("Your # is even");
    // pos negative

    if (userChoice){
        //number things. Even or Odd
        var userNumber = prompt("Enter a number please: ")
        if (userNumber > 0) {
        }
    }
            alert("Your # is even");*/






