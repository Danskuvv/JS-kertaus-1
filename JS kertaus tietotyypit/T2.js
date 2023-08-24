'use strict';

function calculateDistance(x1, y1, x2, y2) {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

  return distance;
}

const x1 = prompt('Anna X koordinatti 1. pisteelle');
const y1 = prompt('Anna Y koordinatti 1. pisteelle');
const x2 = prompt('Anna X koordinatti 2. pisteelle');
const y2 = prompt('Anna Y koordinatti 2. pisteelle');

const result = calculateDistance(x1, y1, x2, y2);

document.getElementById('target').innerHTML = result;
