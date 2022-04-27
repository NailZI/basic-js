const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const met = {};
  let res = '';
    // met.name = 'John'
  for (let i = 0; i < str.length; i++) {
      // console.log(str[i]);
      if (str[i] in met) {
          met.str[i] += 1;
          // console.log(str[i]);
      } else {
          met[str[i]] = 1;
      }
  };
  for (let key in met) {
    if (String(met[key]) != 1) {
      res += String(met[key]);
    };
      // console.log(met[key]);
    res += String(key);
      // console.log(res);
  }
  return res;
}

module.exports = {
  encodeLine
};
