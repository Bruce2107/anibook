/// <reference types="node" />
export default function createImageObject(contentType: string, folder: string, name: string, path: string): {
    folder: string;
    name: string;
    contentType: string;
    image: Buffer;
};
