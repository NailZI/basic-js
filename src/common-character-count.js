const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let map_s1 = new Map();
  let map_s2 = new Map();
  let sum = 0;
  
  function check_letter(str) {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
      let key = str[i];
      if (map.has(key)) {
        let num = map.get(key);
        map.set(key, num+1);
      } else {
        map.set(key, 1);
      }
    }
    return map;
  }
  map_s1 = check_letter(s1);
  map_s2 = check_letter(s2);
  // console.log(map_s1);
  // console.log(map_s2);

  for (let keys of map_s1.keys()) { 
    if (map_s2.has(keys)) {
      console.log(keys);
      sum += Math.min(map_s1.get(keys), map_s2.get(keys));
    }
  }
  // console.log(sum_s2);
  return sum;
}

// console.log(getCommonCharacterCount('aabcc', 'adcaa'));

module.exports = {
  getCommonCharacterCount
};
