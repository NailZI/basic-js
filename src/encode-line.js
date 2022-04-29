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
  let sum_arr = [];
  let code_str = '';
  let sum = 1;
  for (let i = 0; i < str.length; i++) {
    let arr_cur = [];
    let value = str[i];
    if (value != str[i+1]) {
      arr_cur.push(value);
      arr_cur.push(sum);
      sum_arr.push(arr_cur);
      sum = 1;
    } else {
      sum++
    }
  }
    // console.log(sum_arr);
    sum_arr.forEach((entries) => {
      if (entries[1] > 1) {
        code_str += entries[1] + entries[0]
      } else {
        code_str += entries[0]
      }
    })
    // console.log(code_str);
    return code_str;
  }


module.exports = {
  encodeLine
};


// encodeLine('aabbbc') // => '2a3bc'
// encodeLine('aaaatttt') //
// encodeLine('abbcca') //abbcca