import { Manga } from './types';

export default function isManga(object: any): object is Manga {
  return 'whereRead' in object;
}
