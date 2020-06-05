function limits(limit) {
  let limitAnime = 0,
    limitManga = 0;
  if (limit < 0 || !limit) limitAnime = 1;
  else if (limit % 2 === 0) limitAnime = limitManga = limit / 2;
  else {
    limitAnime = (limit + 1) / 2;
    limitManga = limitAnime - 1;
  }
  return {
    limitAnime,
    limitManga,
  };
}

module.exports = limits;
