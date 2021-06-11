const inquirer = require("inquirer");

const { copyDir } = require("./utils/copy-dir");
const { createDirIfNotExistsAndGetPath } = require("./utils/create-dir");

inquirer
  .prompt([
    { name: "projectName", message: "Your project name:", type: "input" },
  ])
  .then((answers) => {
    const dirPath = createDirIfNotExistsAndGetPath(answers.projectName);
    copyDir(dirPath);
  });
