const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let intermediate_arr = [];
  let result = [];
  let index = 0;
  arr.forEach((value) => {
    if (value != -1) {
      intermediate_arr.push(value);
    }
  });
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  intermediate_arr.sort(compareNumeric);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(intermediate_arr[index]);
      index++;
    }
  }
  return result;
}

// const arr = [-1, 150, 190, 170, -1, -1, 160, 180]
// const arr = [ 11, 16, 2, 2, 4, 9 ]
// console.log(sortByHeight(arr));

module.exports = {
  sortByHeight
};
