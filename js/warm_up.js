//Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//Example input: [95, 74, 86, 100]
//Example output: 88.75 (edited)

/*
function findAverage(finalGrades) {
    let sum = 0;
    finalGrades.forEach(function (finalGrades) {
    sum += finalGrades;
    })
    return sum / finalGrades.length;
}

console.log(findAverage([95,74,86,100]));
*/

//JS Object Warmup, pt 1:
//Create an object representing a person. It should have properties representing:
//   - names (an array of strings)
//   - date of birth
//   -occupation
//Hard code some values in that object, then log it and its properties to the console

/*let person = {
    fullName: ["Rebecca", "M" , "Martinez"],
    dateOfBirth: '06/30/1993',
    occupation: "Professional Podcast Listener"
}
    console.log(person);*/

/*let person2 = person;
person2.fullName = ["Bryant", "Gutierrez"];
person2.dateOfBirth = "10/14/1992";
person2.occupation = "IOS Developer";

console.log(person2);*/


//JS Object Warmup, pt 2:
// Create an object representing a person’s contact info. It should have:
// -phone number
// -street address
// -state
// -postal code
// -email address
// Hard code some values in that object, then log it and its properties to the console

/*let contactInfo = {
    phoneNumber: '210-123-4567',
    streetAddress: '123 Walaby Way',
    city: 'Sydney',
    state: 'Texas',
    postalCode: '78250',
    eMail: 'fakeperson@gmail.com'
}

console.log(contactInfo);

// TODO: Print out the formatted address of the contact info
//  It should look like this-ish:
//      123 Anywhere Ln
//      Beverly Hills, CA 90210
//  Hint: **Use a function for this**
//  Maybe that function take a contactInfo job as an argument

console.log(contactInfo.streetAddress);
console.log(contactInfo.city + "," + contactInfo.state + ","+  contactInfo.postalCode);

person["contactInfo"] = contactInfo;

function Person(fullName, occupation, dateOfBirth){
    this.fullName = fullName;
    this.occupation = occupation;
    this.dateOfBirth = dateOfBirth;
    this.contactInfo = contactInfo
}
// makes a new person object instance (by invoking the constructor)

let person2 = new Person(
    ["Rebecca", "M" , "Martinez"],
    "Professional Podcast Listener",
    '06/30/1993',
    new ContactInfo(
        '210-123-4567',
        '123 Walaby Way',
        'Sydney',
        'Texas',
        '78250',
        'fakeperson@gmail.com'));


function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, eMail){
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.postalCode = postalCode;
    this.eMail = eMail;
}

console.log(person2);*/
// end of objects 02/16/2022

//JS Object Warmup, pt 4:
// We are going to create a method which
// allows a user to input their desired amount of names names
// use prompt, alert, confirm inside of a while loop
//  - assign each name to an array
//  once the user decides they are done giving names, end the loop and return the string array
//  then assigning that returned array by invoking your new function on the Person.names property value!
//  Things to consider:
//  Should this be a standalone function or should it be a method on the Person object?

/*
function userInput(){
    let namesArray = [];
    let hasMoreNames = true;
    while(hasMoreNames){
        //get names

        //prompt names
        namesArray.push(prompt("Please enter your desired name"));
        // asks if there are any additional names
        hasMoreNames = confirm("Would you like to enter another name?");
    }
    return namesArray;
}
console.log(userInput());

let person2 = new Person(
    ["Rebecca", "M" , "Martinez"],
    "Professional Podcast Listener",
    '06/30/1993',
    new ContactInfo(
        '210-123-4567',
        '123 Walaby Way',
        'Sydney',
        'Texas',
        '78250',
        'fakeperson@gmail.com'));*/

//TODO: Warmup: Create a function which returns true if the given argument is a number, false if it is not a number
// Testcases to consider:
// Numeric strings?
// Boolean?
// Arrays?
// Objects?
// To test, simply invoke your function inside a console.log and pass in values of different types (see above) as arguments




function numbersOnly(input) {
    if (input > 0){
    return true;
} else {
    return false;
}
}
console.log(numbersOnly('tiger'));
console.log(numbersOnly('12'));



// Casey's Walk-thru

function isANumber(maybeANumber){
    return !!parseFloat(maybeANumber); // give the opposite of the opposite of the truthiness
}

// string
console.log(isANumber("zebra"));

// numeric string
console.log(isANumber('12'));






