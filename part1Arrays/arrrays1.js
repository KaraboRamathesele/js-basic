
const numbers = [3, 4];

// End
numbers.push(5, 6);

console.log(numbers);

// Beginning
numbers.unshift(1, 2);

console.log(numbers);

// Middle
numbers.splice(2, 0, 'a', 'b');


// Finding primitive elements in an array
const nomoro = [1, 2, 3, 1, 2, 4];

console.log(nomoro.indexOf(2, 3)); // fromIndex will start counting from that point (index)
console.log(nomoro.lastIndexOf(1));

// returns true if value exists
console.log(nomoro.indexOf(1) !== -1);
console.log(nomoro.includes(1));

// Reference array
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// const course = courses.find(function(course) {
//     return course.name === 'a';
// });
const course = courses.find (course => course.name === 'a');
console.log(course);

// Removing elements
const numbers2 = [2, 4, 6, 8, 10, 12, 14];

// End
const last = numbers2.pop();
console.log(numbers2);

// Beginning
const first = numbers2.shift();
console.log(first);

// Middle
numbers2.splice(2, 1);
console.log(numbers2);


