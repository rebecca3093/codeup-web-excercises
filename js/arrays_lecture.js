"use strict";


/*var dog1 = "Fido;";
var dog2 = "Spot";
var dog3 = "Fifi";
var dog4 = "Lola";*/


// Fido is in the first placement
// therefore I consider Fido to be an odd element
// this even index valued will be considered an odd element
//var dogNames = ["Fido", "Spot", "Fifi", "Lola"];
//var dogAges = [5, 2, 3, 10];

//console.log("Dog Names: " + dogNames);
//console.log(dogNames.length);

// first element is at index 0
// note that index can also be referred to as a subscript
//console.log(dogNames[1]); // should output fido
//how to speak accessing elements
// the element at index 0
// the 0th element in the array
// dogNames sub 0

// log the 2nd element
// last element is at index -1
//var lastIndex = dogNames.length - 1;
//console.log(dogNames[lastIndex]); // should output lola
// how to speak accessing the last element
//the last element in the array
// dogNames sub lastIndex

//console.log(dogNames[dogNames.length - 2]);

//arrays let you make a collection of the dog names
//It is much easier to where you have to change your code to add a dog name
// you can automate things as well,
//it lets your code become more efficient.
//use square brackets to declare the array
// while they are more complex, they have functions that let you adjust them to change them
// has lots of extras to make the code more efficient.

// loops and arrays are like peas and carrots

/*for (var i = 0; i < dogNames.length; i++){
    //output the ith element in the array
    // output the element sub i
    // output the emement at index i
    console.log("Dog at index " + i + " is" + dogNames[i]);

}

for (let i = dogNames.length - 1; i >= 0; i--);{
    //output only the odd dogs
    //Fido is the first element, even tho the index is 0
    //therefore I consider Fido to be an odd element
    //thus even index valued will be considered an odd element
    if (i % 2 === 0) {
        console.log("The odd dog at index " + i + " is " + dogNames[i]);
    }
}*/

//dogNames.forEach(function(dogname,index) {
    // this function will be excuted on each element
    //as the forEach  iterates over the array
    // if( a certain record) {
    //      skip that record
    // }

    //dogName = "Zantor";
/*dogNames[index] = "Zantor"
    //output the odd dogs ( i.e, the dog at the index 0 is an odd dog)
    if (index % 2 === 0) {
    console.log("Dog at Index " + index + " is" + dogName);
}
    // stop the loop with break id dogname is Spot
    if (dogName === "Spot") {
        return;
    }
});

console.log(dogNames);*/




var dogNames = ["Fido", "Spot", "Fifi", "Lola", "Fido"];

//push
dogNames.push("Ralph");
console.log(dogNames);

//unshift
dogNames.unshift("Suzie");
console.log(dogNames);

//pop
var poppedName = dogNames.pop();
console.log("Removed " + poppedName);
console.log(dogNames);


//shift
var shiftedName = dogNames.shift();
console.log("Removed" + shiftedName);
console.log(dogNames);



// build an array with the following words IN ORDER, 1 word at a time


/*var fruits = ['pear', 'lemon', 'cherry', 'apple', 'banana', 'mango'];

fruits.push("apple");
fruits.push("banana");
fruits.unshift("cherry");
fruits.unshift("lemon");
fruits.push("mango");
fruits.unshift("pear");

console.log(fruits);*/


//indexof

console.log(dogNames.indexOf("Lola"));


//lastIndexOf

console.log(dogNames.lastIndexOf("Fido", 3));

//slice
console.log(dogNames.slice(1,3 ));

//reverse
//console.log(dogNames.reverse());
//reverse also returns
dogNames.reverse().forEach(function dogName, index){
    console.log(dogNames);
}
//show backwards itteration in foreach

//sort


//split

//join
