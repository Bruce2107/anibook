const fs = require('fs');

function createImageObject(contentType, folder, name, path) {
  return {
    contentType,
    folder,
    image: Buffer.from(fs.readFileSync(path).toString('base64'), 'base64'),
    name,
  };
}

module.exports = createImageObject;
