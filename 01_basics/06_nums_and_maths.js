const score = 400 // 400
// console.log(score); 

const balance = new Number(100) // [Number: 100]
// console.log(balance); 

// console.log(balance.toString()); // 100 
// console.log(balance.toString().length); // [Number: 100] 3 

// console.log(balance.toFixed(2)); // 100.00 

const otherNumber = 123.665
// console.log(otherNumber.toPrecision(3)); // 124 (Roundoff) 

// console.log(otherNumber.toPrecision(4)); // 123.7 

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,000 

// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

// console.log(Math); //Object [Math] {} 

// console.log(Math.abs(-4)); // 4 
// console.log(Math.round(4.3)); // 4 (roundoff) 
// console.log(Math.round(4.6)); // 5 (roundoff) 

// console.log(Math.ceil(4.2)); // 5 
// console.log(Math.floor(4.9)); // 4 

// console.log(Math.min(12,22,5,7,88,6,1)); // 1 
// console.log(Math.max(12,22,5,7,88,6,1)); // 88 

console.log(Math.random); // Math.random gives value betwwen 0 and 1 like 0.1, 0.2
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1); // this gives me value between 1 to 10

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min + 1)) + min); //13,11 ,10