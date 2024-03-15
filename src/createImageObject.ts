import { readFileSync } from 'fs';
import { TypeImage } from './types';

export default function createImageObject(
  contentType: string,
  folder: string,
  name: string,
  path: string
): TypeImage {
  return {
    contentType,
    folder,
    name,
    image: readFileSync(path),
  };
}
