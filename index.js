const inquirer = require("inquirer");
const fse = require("fs-extra");
const path = require("path");

const { createDirIfNotExistsAndGetPath } = require("./utils/create-dir");

inquirer
  .prompt([
    { name: "projectName", message: "Your project name:", type: "input" },
  ])
  .then((answers) => {
    const dirPath = createDirIfNotExistsAndGetPath(answers.projectName);

    copy(dirPath);
  });

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
