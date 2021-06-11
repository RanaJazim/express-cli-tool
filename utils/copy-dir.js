const path = require("path");
const fse = require("fs-extra");

function copyDir(destDir) {
  const srcDir = path.resolve(__dirname, "../app-code");

  fse.copySync(srcDir, destDir, { overwrite: true }, (err) => {
    if (err) {
      console.log("Error while scaffolding project", err);
      return;
    }

    console.log("Successfully scaffolding ...");
  });
}

module.exports = { copyDir };
