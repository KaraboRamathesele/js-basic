
let address1 = new Address('Babinaphuti', 'Joburg', '14693');
let address2 = new Address('Babinaphuti', 'Joburg', '14693');


function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address.street === address2.street &&
    address1.city === address2 &&
    address.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;  
}