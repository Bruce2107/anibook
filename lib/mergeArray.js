const shuffle = require('./shuffleArray');

function mergeArray(array, ...arrays) {
  if (!arrays) {
    return array;
  }
  array = arrays.reduce((a, x) => a.concat(x), array);
  return shuffle(array);
}

module.exports = mergeArray;
