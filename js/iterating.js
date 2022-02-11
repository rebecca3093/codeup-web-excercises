(function(){
"use strict";

/**
 * TODO:
 * Create an array of 4 people's names and store it in a variable called
 * 'names'.
 */

var names = ['Pedro', 'Darla', 'Cash', 'Bryant'];

/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */

console.log(names.length);

/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */

//var lastIndex = names.length -1;
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3])
/**
 * TODO:
 * Write some code that uses a for loop to log every item in the names
 * array.
 */

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

/**
 * TODO:
 * Refactor your above code to use a `forEach` loop
 */

let foreach = names.foreach(function(aname, index)){
    console.log(aname);{
        }
}

/**
 * TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 *      write a function called "first" that has 1 array parameter and returns the element at index 0
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */

function first(anArray){
    return anArray[0];
}

function second(anArray) {
    return anArray[0];
}

function last(anArray) {
        return anArray[0];
}

console.log(first([1,2,3,4,5]));
console.log(first(names));
console.log(last(names));
console.log(last([1,2,3,4,5]));

})();
