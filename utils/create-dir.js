const fs = require("fs");

function createDirIfNotExistsAndGetPath(dir) {
  const dirPath = process.cwd() + "/" + dir;

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  return dirPath;
}

module.exports = { createDirIfNotExistsAndGetPath };
