
function sum() {
    let total = 0;
    for (let value of arguments)
      total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 10));

// Rest Operator

function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount)
}

console.log(sum(0.1, 20, 30));

// Default Parameters

// Getters and Setters

const person = {
    firstName: 'Karabo',
    lastName: 'Ramathesele',
    // old-way fullName: function() {},
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Karabo Ramathesele';
console.log(person);
//console.log(person.fullName);

// getters ==> access properties in an obj
// setter ==> change (mutate) them

//ARROW HANDLING -- TRY AND CATCH

const person2 = {
    firstName: 'Karabo',
    lastName: 'Ramathesele',
    // old-way fullName: function() {},
    get fullName() {
        return `${person2.firstName} ${person2.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string') 
          throw new Error('value is not a string.'); // exception

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person2.fullName = ' ';
}
catch (e) {
    alert(e);
}
console.log(person2);
