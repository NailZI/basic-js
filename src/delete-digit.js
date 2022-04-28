const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let n_str = String(n);
  let arr = [];
  for (let i = 0; i < n_str.length; i++) {
      arr.push(n_str.slice(0, i) + n_str.slice(i+1));
  }
  return Math.max.apply(null, arr);
}

module.exports = {
  deleteDigit
};
