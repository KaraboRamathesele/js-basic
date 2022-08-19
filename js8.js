const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Enumerate property of an object
for (let key in circle)
  console.log(key, circle[key]);


for (let key of Object.keys(circle))
  console.log(key);

for (let entry of Object.entries(circle))
  console.log(entry);

// In operator is a given property exist in a given object

if ('color' in circle) console.log('yes');


// Cloning Object

// const another = {};
// for (let key in circle)
//   another[key] = circle[key];
//     // another['radius'] = circle['radius'];
// console.log(another);

// 2nd method
// const another = Object.assign({}, circle);

// 3rd method
const another = { ...circle };
  console.log(another);