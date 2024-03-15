import mergeArray from './mergeArray';
describe('Merge array', () => {
  it('should merge 2 array of manga', () => {
    const array1 = [1, 2];
    const array2 = [3, 4];
    const mergedArray = mergeArray(array1, array2);
    expect(mergedArray.length).toBe(4);
  });
  it('should return the array shuffled', () => {
    const array1 = [1, 2];
    const mergedArray = mergeArray(array1, []);
    expect(mergedArray.length).toBe(2);
  });
});
