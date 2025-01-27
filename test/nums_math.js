const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // op => 100.00

const otherNumber = 123.7894
// console.log(otherNumber.toPrecision(4)); // 123.8

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-In')); // 1,00,00,000

// ********** math ****************

// console.log(Math.round(4.2)); // 4
// console.log(Math.ceil(4.2)); // 5 bade value
// console.log(Math.floor(4.9)); // 4 chote value
 
console.log((Math.floor(Math.random())*10)+1); 
 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+min); // range 10 to 20 random values 









