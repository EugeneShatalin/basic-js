import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let string = String(str);
  let repeatTimes = options.repeatTimes;
  let separator = options.separator ? String(options.separator) : '+';
  let addition = options.addition !== undefined ? String(options.addition) : null;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator ? String(options.additionSeparator) : '|';

  let srtOne = '';
  let strTwo = '';

  if(addition && additionRepeatTimes) {
    for(let i = 1; i <= additionRepeatTimes; i++) {
      if(i < additionRepeatTimes) {
        strTwo += addition + additionSeparator;
      } else {
        strTwo += addition;
      }
    }
  } else {
    strTwo = addition;
  }

  if(string && repeatTimes) {
    for(let i = 1; i <= repeatTimes; i++) {
      if(i < repeatTimes) {
        srtOne += strTwo ? string + strTwo + separator : string + separator;
      } else {
        srtOne += strTwo ? string + strTwo : string;
      }
    }
    return srtOne;
  }
if(string) {
    return string + strTwo;
  }
return strTwo;
}