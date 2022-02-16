// Creating an Object


let car = {};
console.log(typeof car);

car.make = 'Ford';

console.log(car);

car.model = 'Mustang';
console.log(car);



// 2nd example
let cohort=  {
    name: 'Fortran',
    startDate: '01/31/2022',
    endDate: '06/29.2022'
}

// Accessing Properties
console.log(cohort.name);
console.log('The car model is' + car.model);

//Find Keys
console.log(object.keys(car));
car.year = '1994';
console.log(Object.keys(car));
console.log(Object.keys(cohort));

//In Keyword

if(!'numOfWheels' in car){
    car.numOfWheels = 4;
}
console.log(car);


// Nested Values


let elixirCohort = {
    name: "Elixir",
    startYear: '2021',
    students: ["Mike", "James", "Pat", "Becca", "TyReik", "Daniel", "Ryan", "George"],
    hasGraduated: false
}

console.log(elixirCohort.students);
console.log(elixirCohort.hasGraduated);

elixirCohort.hasGraduated = true;

console.log(elixirCohort.hasGraduated);


// Assigning Functionality (behaviors) to an Object

car.honk = function (){
    console.log("Honque Honque")
}
car.honk();




















