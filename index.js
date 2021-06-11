const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    { name: "projectName", message: "Your project name:", type: "input" },
  ])
  .then((answers) => {
    const content = "Content";

    const dirPath = process.cwd() + "/sample/hello";
    createDirIfNotExists(dirPath);
    const filePath = dirPath + "/first.txt";

    fs.appendFile(filePath, content, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(res);
    });

    console.log(answers);
  });

function createDirIfNotExists(dirName) {
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }
}
