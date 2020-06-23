import isManga from './isManga';

describe('Manga type validation', () => {
  it('should return true when object is an anime', () => {
    const object = {
      comment: 'comment',
      folder: 'folder',
      images: ['images'],
      whereRead: [{ language: 'test', name: 'test', url: 'test' }],
    };

    expect(isManga(object)).toBe(true);
  });
  it('should return false when object is not an anime', () => {
    const object = {
      name: 'manga',
      photo: 'photo.webp',
      synopsis: 'text',
      comment: 'text',
    };

    expect(isManga(object)).toBe(false);
  });
});
