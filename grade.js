// Function returns studenst grades

// 1st calculates average from array wth marks as input

// Then console outputs the correct symbol 

const marks = [80, 80, 50];
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks)
  
      if (average <= 59) 
      return 'F';

      if (average < 70) 
      return 'D';

      if (average < 80) 
      return 'C';

      if (average < 90) 
      return 'B';

      return 'A';
      
}

// Single responisibilty model
 function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
      sum += value;
    return sum / array.length;
 }