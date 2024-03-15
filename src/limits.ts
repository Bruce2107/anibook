export default function limits(limit: number = 0) {
  let limitAnime: number, limitManga: number;
  if (limit === 0 || limit === null) {
    limitAnime = 1;
    limitManga = 0;
  } else if (limit % 2 === 0) {
    limitAnime = limitManga = limit / 2;
  } else {
    limitManga = Math.floor(limit / 2);
    limitAnime = limitManga + 1;
  }
  return {
    limitAnime,
    limitManga,
  };
}
