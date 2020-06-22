import { readFileSync } from 'fs';

export default function createImageObject(
  contentType: string,
  folder: string,
  name: string,
  path: string
): {
  folder: string;
  name: string;
  contentType: string;
  image: Buffer;
} {
  return {
    contentType,
    folder,
    image: Buffer.from(readFileSync(path).toString('base64'), 'base64'),
    name,
  };
}
