//

// let address = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
// };

let addressTwo = createAddress('a', 'b', 'c');

console.log(addressTwo);

// Factory Function

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Constructor Function

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}