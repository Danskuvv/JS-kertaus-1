'use strict';

function sortArray(array1, order) {
  if (order === 'asc') {
    const sortedAsc = array1.sort();
    return sortedAsc;
  } else if (order === 'desc') {
    const sortedDesc = array1.sort().reverse();
    return sortedDesc;
  }
}

const numbers = [1, 9, 8, 4, 5, 7];
console.log(numbers);

const sortedNum = sortArray(numbers, 'asc');
console.log(sortedNum);

const sortedNumDesc = sortArray(numbers, 'desc');
console.log(sortedNumDesc);
