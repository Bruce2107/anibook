function isAnime(object) {
  return 'whereWatch' in object;
}

function isManga(object) {
  return 'whereRead' in object;
}

function searchObjectInArray(url, array) {
  for (let i in array) if (array[i].url === url) return true;
  return false;
}

function createImageObject(folder, file) {
  return {
    contentType: file.mimetype,
    folder,
    image: Buffer.from(readFileSync(file.path).toString('base64'), 'base64'),
    name: file.originalname,
  };
}

module.exports = {
  isAnime,
  isManga,
  searchObjectInArray,
  createImageObject
};
