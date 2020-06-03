function isAnime(object) {
  return 'whereWatch' in object;
}

function isManga(object) {
  return 'whereRead' in object;
}
module.exports = {
  isAnime,
  isManga
}
