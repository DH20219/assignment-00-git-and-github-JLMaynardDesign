//example on Compass on how filter method works
/*
const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log("Subset of even numbers:", evens);
*/

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

//write code to filter this list down to only passing grades
//should print out passing grades to the console
//passing grade is 70 or above

//version 1
const passingGrades = grades.filter(function(num) {
  //return num >= 70;
});

//version 2: need to be inline and anonymous (coming back to this)



