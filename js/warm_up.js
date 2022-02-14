//Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//Example input: [95, 74, 86, 100]
//Example output: 88.75 (edited)

function findAverage(finalGrades) {
    let sum = 0;
    finalGrades.forEach(function (finalGrades) {
    sum += finalGrades;
    })
    return sum / finalGrades.length;
}

console.log(findAverage([95,74,86,100]));
