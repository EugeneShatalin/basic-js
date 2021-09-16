import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  let length = s1 < s2 ? s1.length : s2.length;
  if(!length) {
    return 0;
  }
  const arrMin = s1 < s2 ? s1.split('').sort() : s2.split('').sort();
  const arrMax = s1 < s2 ? s2.split('').sort() : s1.split('').sort();
  let count = 0;
  for(let i = 0; i < arrMin.length; i++) {
    if(arrMax.indexOf(arrMin[i]) !== -1) {
      count++;
      arrMax.splice(arrMax.indexOf(arrMin[i]), 1);
    }
  }
  return count;
}
