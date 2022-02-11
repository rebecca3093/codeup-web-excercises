"use strict";

var oddNumber = promptForOddNumberInRange(1,50);
oddNumber = parseInt(oddNumber);

printOddNumbersInRange (1,50, oddNumber);

function printOddNumbersInRange(low, high, skipNumber) {
    for (let i = low; i <= high; i++) {
        if (i === skipNumber || i % 2 === 0) {
            if (i === skipNumber) {
                console.log("Yikes! Skipping number " + i);
            }
            continue;
        }
        console.log("Here is a odd number" + i);
    }
}

function PromptForOddNumberInRange (low, high){
    var result;
    while(true) {
        result = prompt("Enter a Odd number from" + low + "to" + high);
    // loop until user gives an odd number in the range inclusive.
    if ( result % 2 === 1 && result >= low && result <= high) {
        break;
        }
    }
    //console.log(result);
    return result;
}







