import { Link } from './types';
import searchInArray from './searchObjectInArray';

describe('Search in array', () => {
  const links: Link[] = [];
  beforeAll(() => {
    links.push(
      { language: 'test', name: 'test', url: 'url1' },
      { language: 'test', name: 'test', url: 'url2' },
      { language: 'test', name: 'test', url: 'url3' }
    );
  });
  it('should return true when find an item', () => {
    const toFind = 'url1';

    const result = searchInArray(toFind, links);

    expect(result).toBe(true);
  });

  it('should return false when find an item', () => {
    const toFind = 'url';

    const result = searchInArray(toFind, links);

    expect(result).toBe(false);
  });
});
