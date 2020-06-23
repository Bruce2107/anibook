import { Link } from './types';

export default function searchObjectInArray(url: string, array: Array<Link>) {
  for (let i in array) if (array[i].url === url) return true;
  return false;
}
