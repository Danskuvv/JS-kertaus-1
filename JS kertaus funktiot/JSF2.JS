'use strict';

const numbers = [];

const number1 = parseFloat(prompt('Syötä numero'));
numbers.push(number1);
const number2 = parseFloat(prompt('Syötä numero'));
numbers.push(number2);
const number3 = parseFloat(prompt('Syötä numero'));
numbers.push(number3);
const number4 = parseFloat(prompt('Syötä numero'));
numbers.push(number4);
const number5 = parseFloat(prompt('Syötä numero'));
numbers.push(number5);

console.log(`numbers: ${numbers}`);

const checknumber = parseFloat(prompt('Tarkista numero'));

if (numbers.includes(checknumber)) {
  console.log(`lista sisältää numeron ${checknumber}`);
} else {
  console.log(`lista ei sisällä numeroa ${checknumber}`);
}

numbers.pop();
console.log(`updated numbers: ${numbers}`);

numbers.sort();
console.log(`sorted numbers: ${numbers}`);
