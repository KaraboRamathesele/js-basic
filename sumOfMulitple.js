// Function returns sum of the multiples of 3 and 5 of input number 

console.log(sum(10));

function sum(limit) {
  let sum = 0;

    for (let i = 0; i <= limit; i++) 
      if (i % 3 === 0 || i % 5 === 0)
        sum += i;

    return sum;
       
}


showPrime(20);
// Prime Numbers
// numbers whose factors are only 1 and itself

// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

function showPrime(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++ ) 
    if (number % factor === 0) 
      return false;   
  
  return true;
}