function searchObjectInArray(url, array) {
  for (let i in array) if (array[i].url === url) return true;
  return false;
}

module.exports = searchObjectInArray;
