import createImageObject from './createImageObject';

describe('Create Image Object', () => {
  it('should create an image object', () => {
    const image = createImageObject(
      'image/webp',
      'test',
      'oono.webp',
      'src/oono.webp'
    );

    expect(image.contentType).toBe('image/webp');
    expect(image.folder).toBe('test');
    expect(image.name).toBe('oono.webp');
    expect(image.image).toBeDefined();
  });
});
