'use strict';

console.log(
  `${navigator.userAgentData.brands[2].brand}, ${navigator.userAgentData.brands[2].version}`
);
console.log(navigator.userAgentData.platform);
console.log(screen.availHeight, screen.availWidth);
console.log(screen.height, screen.width);

const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

console.log(date.toLocaleTimeString('fi-FI', options));
console.log(navigator);

const divElement = document.getElementById('target');

for (let i = 0; i < 5; i++) {
  const pElement = document.createElement('p');
  pElement.id = i;
  divElement.appendChild(pElement);
}

document
  .getElementById('0')
  .insertAdjacentHTML(
    'beforeend',
    `Browser version: ${navigator.userAgentData.brands[2].brand}, ${navigator.userAgentData.brands[2].version}`
  );

document
  .getElementById('1')
  .insertAdjacentHTML(
    'beforeend',
    `Operating system: ${navigator.userAgentData.platform}`
  );

document
  .getElementById('2')
  .insertAdjacentHTML(
    'beforeend',
    `Näytön koko: ${screen.height} x ${screen.width}`
  );

document
  .getElementById('3')
  .insertAdjacentHTML(
    'beforeend',
    `Selaimen varattu koko näytöllä: ${screen.availHeight} x ${screen.availWidth}`
  );

document
  .getElementById('4')
  .insertAdjacentHTML(
    'beforeend',
    `Aika: ${date.toLocaleTimeString('fi-FI', options)}`
  );
