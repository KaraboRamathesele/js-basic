//Hour
//If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

let hour = 10;

if (hour >= 6 && hour < 12){
    console.log('Good Morning!');
}
else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening!');
}

//Switch--case

let role ='guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}

// Loops

//for-in
const person = {
    name: 'K',
    age: 30
};

for (let key in person);
console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

// for (let index in colors)
// console.log(index, colors[index]);

// for-of

for (let color of colors)
console.log(color);

