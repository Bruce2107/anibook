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
    image: Buffer.from(readFileSync(path).toString('base64'), 'base64'),
    name,
  };
}
