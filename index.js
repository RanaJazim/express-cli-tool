#!/usr/bin/env node

const inquirer = require("inquirer");
const { copyDir } = require("./utils/copy-dir");
const { createDirIfNotExistsAndGetPath } = require("./utils/create-dir");

inquirer
  .prompt([
    { name: "projectName", message: "Your project name:", type: "input" },
  ])
  .then((answers) => {
    console.log("Please wait ......");

    const dirPath = createDirIfNotExistsAndGetPath(answers.projectName);
    copyDir(dirPath);

    console.log("Done ..");
  })
  .catch((err) => {
    console.log("Error while scaffolding express app", err);
  });
