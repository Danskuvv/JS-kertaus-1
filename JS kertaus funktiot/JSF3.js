'use strict';
document
  .getElementById('target')
  .insertAdjacentHTML('beforeend', 'Even numbers: ');
const numbers = [];
let i = 0;

while (i != 'stop') {
  i = prompt("Anna numero, kirjoita 'stop' lopettaaksesi");
  numbers.push(i);
}

numbers.pop(); // removes 'stop' from the array //
console.log(numbers);

for (const number of numbers) {
  if (number % 2 == 0) {
    document
      .getElementById('target')
      .insertAdjacentHTML('beforeend', `${number}, `);
  }
}
