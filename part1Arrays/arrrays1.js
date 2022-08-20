
const numbers = [3, 4];

// End
numbers.push(5, 6);

console.log(numbers);

// Beginning
numbers.unshift(1, 2);

console.log(numbers);

// Middle
numbers.splice(2, 0, 'a', 'b');


// Finding elements in an array
const nomoro = [1, 2, 3, 1, 2, 4];

console.log(nomoro.indexOf(2, 3)); // fromIndex will start counting from that point (index)
console.log(nomoro.lastIndexOf(1));

// returns true if value exists
console.log(nomoro.indexOf(1) !== -1);
console.log(nomoro.includes(1));