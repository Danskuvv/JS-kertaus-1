'use strict';

function sortArray(array1) {
  const sorted = array1.sort();
  return sorted;
}

const numbers = [1, 9, 8, 4, 5, 7];
console.log(numbers);

const sortedNum = sortArray(numbers);
console.log(sortedNum);
