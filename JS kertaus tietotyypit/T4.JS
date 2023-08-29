'use strict';

const score = parseFloat(prompt('Anna tehtäväsi pisteet'));
let answer = 0;

if (score >= 0 && score <= 39) {
  answer = 0;
  console.log('arvosanasi on 0');
}

if (score >= 40 && score <= 51) {
  answer = 1;
  console.log('arvosanasi on 1');
}

if (score >= 52 && score <= 63) {
  answer = 2;
  console.log('arvosanasi on 2');
}

if (score >= 64 && score <= 75) {
  answer = 3;
  console.log('arvosanasi on 3');
}

if (score >= 76 && score <= 87) {
  answer = 4;
  console.log('arvosanasi on 4');
}

if (score >= 88 && score <= 100) {
  answer = 5;
  console.log('arvosanasi on 5');
}

document
  .getElementById('target')
  .insertAdjacentHTML('beforeend', ` arvosanasi on ${answer}`);
