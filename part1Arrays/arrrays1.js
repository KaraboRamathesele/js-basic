
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

// const slice = combined.slice(2,8);
// console.log(slice);

// Sorting Array

const amanumber = [2,3,1];
amanumber.sort();
console.log(amanumber);

amanumber.reverse();
console.log(amanumber);

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

// every and some

const y = [1, 2, 3];

// const allPositive = y.every(function(value) {
//   return value >= 0;
// });

const atLeastSomePositive = y.some(function(value) {
  return value >= 0;
});

console.log(atLeastSomePositive);

// Filtering Array

const x = [1, -1, 2, 3];

const filtered = x.filter(value => value >= 0);

console.log(filtered);

// Mapping an Array

// MApping to string
// const items = filtered.map(value => '<li>' + value + '</li>');
// const html = '<ul>' + items.join('') + '</ul>'; console.log(html);

// Mapping to object

const items = filtered.map(value => {
  const obj2 = { value: value };
  return obj2;
});

console.log (items);

// Reducing an Array

const numnum = [1,-1, 2, 3];

// let sum = 0;
// for(let n of numnum)
//   sum += n;


// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
let sum = numnum.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);

// Exercise 1 

const  dinomoro = arrayFromRange(1, 4);

console.log(dinomoro);

function arrayFromRange(min, max) {
  let output = [];
  for ( i = min; i <= max; i++)
    output.push(i);
  return output;
}

// Exercise 2 

const monet = [1, 2, 2, 4, 6];

console.log(includes(monet, 4));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}

// Exercise 3 

const bob = [1, 2, 3, 5, 4];

const theDragQueen = except(bob, [1]);

console.log(theDragQueen);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element);
    return output;
}

// Exercise 4 Moving an Element

const jaida = [1, 2, 3, 4, 5];

const output = move(jaida, 0, 4);
console.log(output);

function move(array, index, offset) {
const position = index + offset;
if (position >= array.length || position < 0) {
  console.error('Invalid Offset.');
  return;
}

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

// Exercise 5 count occurences
const heidi = [1, 2, 3, 4, 5, 5, 1];

const count = countOccurrences(heidi, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  // let count = 0;
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurence;
  }, 0);
}

// Exercise 6
const lala = [1, 2, 3, 4, 7];

const max = getMax(lala);
console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  // let max = array [0];

  // for (let i = 1; i < array.length; i++)
  //   if (array[i] > max)
  //     max = array[i];

  // return max;

  return array.reduce((accumulator, current) => {
    if (current > accumulator) return current;
    return accumulator;
  });
}

// Exercise

const movies = [
  { title: 'a', year: '2018', rating: 4.5 },
  { title: 'b', year: '2018', rating: 4.7 },
  { title: 'c', year: '2018', rating: 3 },
  { title: 'd', year: '2017', rating: 4.5 },
];

// All movies in 2018 with rating > 4
// Sort by rating
// Descending order
// Pick title

const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title)

console.log(titles);