const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (members) {
    let team_name = [];
      let name = '';
      for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === 'string') {
          let word = members[i];
          word = word.trim();
          team_name.push(word[0].toUpperCase());
        }
      }
      team_name.sort();
      team_name.forEach(function(item) {
        name  += item;
      });
      if (name.length) {
        return name;
      } else {
        return false;
      }
    } else {
      return false;
    };
}

module.exports = {
  createDreamTeam
};
