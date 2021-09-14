import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let stringNumber = String(n);
  let result = 0;
  for(let i = 0; i < stringNumber.length; i++) {
    let arrNumbers = stringNumber.split('');
    arrNumbers.splice(i, 1);
    let number = Number(arrNumbers.join(''));
    result = number > result ? number : result;
  }
  return result;
}
