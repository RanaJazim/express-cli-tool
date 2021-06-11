const inquirer = require("inquirer");
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");

inquirer
  .prompt([
    { name: "projectName", message: "Your project name:", type: "input" },
  ])
  .then((answers) => {
    const dirPath = process.cwd() + "/" + answers.projectName;
    createDirIfNotExists(dirPath);

    copy(dirPath);

    console.log(answers);
  });

function createDirIfNotExists(dirName) {
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
}

function copy(destDir) {
  const srcDir = path.resolve(__dirname, "./app-code");

  fse.copySync(srcDir, destDir, { overwrite: true }, (err) => {
    if (err) {
      console.log("Error while scaffolding project", err);
      return;
    }

    console.log("Successfully scaffolding ...");
  });
}
