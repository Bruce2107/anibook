const anibook = require('./index');
describe('Anime', () => {
  const anime = {
    name: 'test',
    synopsis: 'test',
    comment: 'test',
    whereWatch: [
      {
        language: 'test',
        url: 'test',
        name: 'test',
      },
    ],
  };
  const notAnime = {
    name: 'test',
    synopsis: 'test',
    comment: 'test',
    info: {
      author: 'test',
      status: 'test',
      numberEpisodes: 12,
    },
  };

  it('should return true when the object contains the "whereWatch" property', () => {
    expect(anibook.isAnime(anime)).toBeTruthy();
  });
  it('should retunt false when the objec not contains the "whereWatch" property', () => {
    expect(anibook.isAnime(notAnime)).toBeFalsy();
  });
});

describe('Manga', () => {
  const manga = {
    name: 'test',
    synopsis: 'test',
    comment: 'test',
    whereRead: [
      {
        language: 'test',
        url: 'test',
        name: 'test',
      },
    ],
  };
  const notManga = {
    name: 'test',
    synopsis: 'test',
    comment: 'test',
    info: {
      author: 'test',
      status: 'test',
      numberEpisodes: 12,
    },
  };

  it('should return true when the object contains the "whereWatch" property', () => {
    expect(anibook.isManga(manga)).toBeTruthy();
  });
  it('should retunt false when the objec not contains the "whereWatch" property', () => {
    expect(anibook.isManga(notManga)).toBeFalsy();
  });
});

describe('Search In Array', () => {
  const array = [];
  beforeEach(() => {
      array.push({ language: 'pt', name: 'um', url: 'url1' });
      array.push({ language: 'pt', name: 'dois', url: 'url2' });
      array.push({ language: 'pt', name: 'tres', url: 'url3' });
      array.push({ language: 'pt', name: 'quatro', url: 'url4' });
  });
  it('should return false', () => {
      const result = anibook.searchObjectInArray('url', array);
      expect(result).toBeFalsy();
  });
  it('should return true', () => {
      const result = anibook.searchObjectInArray('url3', array);
      expect(result).toBeTruthy();
  });
});
