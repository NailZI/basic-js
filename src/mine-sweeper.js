const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];

  function check_mine(pos_i, pos_j) {
    let sum = 0;
    for (let x = (pos_i - 1); x < (pos_i + 2); x++) {
      if ((x < 0) || (x === matrix.length)) {
        // console.log('x=', x, 'y=')
        continue;
      } else {
        for (let y = (pos_j - 1); y < (pos_j + 2); y++) {
          if (y < 0  || (y === matrix[0].length)) {
            // console.log('2: x=', x, 'y=', y)
            continue;
          } else if(matrix[x][y] === true) {
            sum++;
          } 
        }
      }
    }
    return sum;
  }
  
  // check_mine(0, 1);
  
  
  for (let i = 0; i < matrix.length; i++) {
    let line_res = [];
    for (let j = 0; j < matrix[0].length; j++) {
      // console.log(i, j);
      let sum = check_mine(i, j);
      if (matrix[i][j] === true) {
        sum--;
      }
      line_res.push(sum);
      // console.log(line_res);
    }
    
    result.push(line_res);
    // console.log(result);
  }
  return result;
}

// matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
//   ]

// console.log(minesweeper(matrix));

module.exports = {
  minesweeper
};
