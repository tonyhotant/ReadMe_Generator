const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "Title",
    message: "Please enter your project title",
  },
  {
    type: "input",
    name: "Description",
    message: "Please enter the description of your project",
  },
  {
    type: "input",
    name: "Installation",
    message: "Please describe how to install your software",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please describe how to use your software",
  },
  {
    type: "input",
    name: "License",
    message: "Please enter the license for your project",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please describe how to contribute to your project",
  },
  {
    type: "input",
    name: "Tests",
    message: "Please describe how to test your project",
  },
  {
    type: "input",
    name: "Questions",
    message: "Please enter the questions of your project",
  },
  {
    type: "input",
    name: "Name",
    message: "Please enter your GitHub username",
  },
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

    const fileName = answers.Name;

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
