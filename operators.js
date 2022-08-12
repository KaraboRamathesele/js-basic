// operators

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

//Bitwise Opertors

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000 AND operators

console.log(1 | 2); //bitwise OR
console.log(1 & 2); //bitwise AND

// Read, Write, Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);