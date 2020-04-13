const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your Github username",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  //more questions required
];

function writeToFile(file, fileName) {
  return fs.writeFile(`${fileName}.md`, file, (err) => {
    if (err) console.error(err);
    else console.log("File written");
  });
}

function init() {}

init();

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);

    const fileName = answers.name;

    const markdownFile = generateMarkdown(answers);

    console.log(markdownFile);

    writeToFile(markdownFile, fileName);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
      console.error(error);
    }
  });