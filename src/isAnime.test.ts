import isAnime from './isAnime';

describe('Anime type validation', () => {
  it('should return true when object is an anime', () => {
    const object = {
      comment: 'comment',
      folder: 'folder',
      images: ['images'],
      info: {
        author: 'author',
        numberEpisodes: 123,
        status: 'status',
      },
      musics: [{ language: 'language', name: 'name', url: 'https://url.com' }],
      name: 'name',
      photo: 'photo',
      synopsis: 'synopsis',
      whereWatch: [
        { language: 'language', name: 'name', url: 'https://url.com' },
      ],
    };

    expect(isAnime(object)).toBe(true);
  });
  it('should return false when object is not an anime', () => {
    const object = {
      name: 'anime',
      photo: 'photo.webp',
      synopsis: 'text',
      comment: 'text',
      info: {
        author: 'author',
        numberEpisodes: 123,
        status: 'status',
      },
    };

    expect(isAnime(object)).toBe(false);
  });
});
