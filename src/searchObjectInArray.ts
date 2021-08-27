import { Link } from './types';

export default function searchObjectInArray(url: string, array: Array<Link>) {
  return !!array.find((i) => i.url === url);
}
