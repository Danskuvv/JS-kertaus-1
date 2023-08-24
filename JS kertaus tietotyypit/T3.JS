'use strict';

let answer = '';

const first = prompt('Kolmion eka sivu');
const second = prompt('Kolmion toka sivu');
const third = prompt('Kolmion kolmas sivu');

if (first === second && second === third) {
  answer = 'Triangle is equilateral';
} else if (first === second || first === third || second === third) {
  answer = 'Triangle is isosceles';
}

if (first !== second && third !== first && third !== second) {
  answer = 'Triangle is scalene';
}

document.getElementById('target').insertAdjacentHTML('beforeend', answer);
