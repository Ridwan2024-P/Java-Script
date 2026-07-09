// Logical AND (&&)
// Return True if both operands are True
console.log(true && true);

let highIncome =true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore ;

console.log(eligibleForLoan);


// Logical OR (||)
// Return True if one operands are True
// console.log(true && true);

// let highIncome =true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore ;

// console.log(eligibleForLoan);



// Logical NOt (!)
// Return True if one operands are True
// console.log(true && true);

// let highIncome =true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome =! goodCreditScore ;

// console.log(eligibleForLoan);

// false || true --> true
//false || 'Rid' --> Rid
//false || 1 --> 1


//Falsy (false)
//Undefined
//null
//0
//false
//''
//NaN

//Anything that is not False --> Truthy

let userColor = undefined;
let defaultColor = 'blue';
let currrentColor = userColor || defaultColor;
console.log(currrentColor);