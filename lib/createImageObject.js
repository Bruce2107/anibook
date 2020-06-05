const fs = require('fs');

function createImageObject(folder, file) {
  return {
    contentType: file.mimetype,
    folder,
    image: Buffer.from(fs.readFileSync(file.path).toString('base64'), 'base64'),
    name: file.originalname,
  };
}

module.exports = createImageObject;
