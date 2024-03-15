import { Link } from './types';

export default function searchObjectInArray(url: string, array: Array<Link>) {
  return array.some((i) => i.url === url);
}
