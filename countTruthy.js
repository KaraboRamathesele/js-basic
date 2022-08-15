
// returns truthy or falsy values
// Falsy 
// undefined
// null
// ''
// false
// 0
// NaN

const array = [1, 2, 3, undefined];

console.log(countTruthy(array));


function countTruthy(array) {
    let count = 0;
    for (let value of array)
      if (value)
        count++;
    return count;
 
}
