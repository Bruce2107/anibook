import shuffle from './shuffle';

export default function mergeArray<T>(array: T[], ...arrays: [T[]]) {
  if (!arrays || !arrays[0].length) {
    return shuffle(array);
  }
  array = arrays.reduce((a, x) => a.concat(x), array);
  return shuffle(array);
}
