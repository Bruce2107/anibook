import mergeArray from './mergeArray';
describe('Merge array', () => {
  it('should merge 2 array of manga', () => {
    const array1 = [
      {
        comment: 'comment',
        folder: 'folder',
        images: ['images'],
        whereRead: [{ language: 'test', name: 'test', url: 'test' }],
      },
      {
        comment: 'comment',
        folder: 'folder',
        images: ['images'],
        whereRead: [{ language: 'test', name: 'test', url: 'test' }],
      },
    ];
    const array2 = [
      {
        comment: 'comment',
        folder: 'folder',
        images: ['images'],
        whereRead: [{ language: 'test', name: 'test', url: 'test' }],
      },
      {
        comment: 'comment',
        folder: 'folder',
        images: ['images'],
        whereRead: [{ language: 'test', name: 'test', url: 'test' }],
      },
    ];
    const mergedArray = mergeArray(array1, array2);
    expect(mergedArray.length).toBe(4);
  });
});
