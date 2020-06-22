import { Anime } from './types';

export default function isAnime(object: any): object is Anime {
  return 'whereWatch' in object;
}
