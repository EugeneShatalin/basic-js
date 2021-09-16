import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper (matrix) {
  const numericField = [];
  for(let i = 0; i < matrix.length; i++) {
    let count = 0;
    numericField[i] = [];
    for(let j = 0; j <  matrix[0].length; j++) {
      if(matrix[i][j]) {
        numericField[i][j] = 1;
        continue;
      }

      if(!matrix[i][j]) {
        for(let k = (i - 1 < 0 ? 0 : i - 1); k < (i + 2 >= matrix.length ? matrix.length : i + 2); k++) {
          for(let n = (j - 1 < 0 ? 0 : j - 1); n < (j + 2 >= matrix[0].length ? matrix[0].length : j + 2); n++) {

            if(matrix[k][n]) {
              count += 1;
            }
          }
        }

        if(count) {
          numericField[i][j] = count;
          count = 0;
        } else {
          numericField[i][j] = 0;
        }
      }
    }
  }
  return numericField;
}