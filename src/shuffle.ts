//https://www.npmjs.com/package/d3-array
export default function shuffle<T>(array: T[], i0 = 0, i1 = array.length) {
  let m = i1 - (i0 = +i0),
    t,
    i;

  while (m) {
    i = (Math.random() * m--) | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
}
