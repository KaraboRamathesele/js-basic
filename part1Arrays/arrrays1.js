
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

// Empting an array

let num = [1, 2, 3, 4];
let another = num;

// Solution 1
// num =[]

//  Solution 2
// num.length = 0;

// Solution 3
// numbers.splice(0, numbers.length);

// Solution 4
while (num.length > 0)
  num.pop();

console.log(num);
console.log(another);

// Joining Arrays

const oddNumbers = [2, 4, 6, 8, 10];
const evenNumbers = [1, 3, 5, 7, 9];

const joined = oddNumbers.join(',');
console.log(joined);

// const combined = oddNumbers.concat(evenNumbers);
// console.log(combined);

const slice = combined.slice(2,8);
console.log(slice);

// Sorting Array

const amanumber = [2,3,1];
amanumber.sort();
console.log(amanumber);

amanumber.reverse();
console.log(amamunber);

const subjects = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'JavaScript'}
];

subjects.sort(function(a, b) {
  // a < b => -1
  // a > b => 1
  // a == b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  else if (nameA > nameB) return 1;
  return 0;

});

console.log(subjects)
