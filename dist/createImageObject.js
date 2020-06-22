"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function createImageObject(contentType, folder, name, path) {
    return {
        contentType,
        folder,
        image: Buffer.from(fs_1.readFileSync(path).toString('base64'), 'base64'),
        name,
    };
}
exports.default = createImageObject;
