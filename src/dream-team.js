import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default  function createDreamTeam(members) {
  if(typeof members === 'number' || typeof members === 'boolean' || members === null || members === undefined || !Array.isArray(members)) {
    return false;
  }
  let whitespaces = '';
  for(let i = 0; i < members.length; i++) {
    if(typeof(members[i]) == "string") {
      let membersTrim = members[i].trim();
      whitespaces += membersTrim[0];
    }
  }
  if(whitespaces == '') {
    return false;
  }
    return whitespaces.toUpperCase().split('').sort().join('');
}
