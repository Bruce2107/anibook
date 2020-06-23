import limits from './limits';
describe('limits', () => {
  it('should return 1 to anime and 0 to manga', () => {
    const result = limits(1);

    expect(result.limitAnime).toBe(1);
    expect(result.limitManga).toBe(0);
  });
  it('should return 1 to anime and 1 to manga', () => {
    const result = limits(2);

    expect(result.limitAnime).toBe(1);
    expect(result.limitManga).toBe(1);
  });
  it('should return 4 to anime and 3 to manga', () => {
    const result = limits(7);

    expect(result.limitAnime).toBe(4);
    expect(result.limitManga).toBe(3);
  });
  it('should return 1 to anime when limit is undefined', () => {
    const result = limits();

    expect(result.limitAnime).toBe(1);
    expect(result.limitManga).toBe(0);
  });
});
