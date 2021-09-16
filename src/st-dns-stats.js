import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const resultObj = {};
  for(let i = 0; i < domains.length; i++) {
    const arr = [];
    let str = '';
    domains[i].replace(/\w+/g, function(match) {
      arr.push('.'+match);
    });
    for(let i = arr.length - 1; i >= 0; i--) {
      str = str + arr[i];
      if (typeof resultObj[`${str}`] !== "undefined") {
        resultObj[`${str}`] = resultObj[str] + 1;
      }else{
        resultObj[`${str}`] = 1;
      }
    }
  }
  return resultObj;
}