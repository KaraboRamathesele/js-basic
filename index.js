//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2];
//return the number of elements in the array
console.log(selectedColors.length);


//Functions - set of statements that perform a task or calculate a value
// Performing a task
 function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
 }

 greet('Karabo', 'Ramathesele');

 // Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

//If a customerhas more than 100 point,
//They are a 'gold' customer, otherwise,
// they are a'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);



