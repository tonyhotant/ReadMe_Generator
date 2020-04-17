const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "Title",
    message: "Please enter your project title: ",
    default: () => {
      return "README.md Generator";
    },
  },
  {
    type: "input",
    name: "Description",
    message: "Enter the description of your project: ",
    default: () => {
      return "An app can generate readme file easily";
    },
  },
  {
    type: "input",
    name: "Installation",
    message: "How to install your software? ",
    default: () => {
      return "npm install";
    },
  },
  {
    type: "input",
    name: "Usage",
    message: "How to use your software? ",
    default: () => {
      return "node index.js";
    },
  },
  {
    type: "list",
    name: "License",
    message: "Enter the license for your project: ",
    choices: ["Apache", "GPLv3", "MIT", "ISC"],
    default: () => {
      return "MIT";
    },
  },
  {
    type: "input",
    name: "Contributing",
    message: "What is the Code of Conduct for your project? ",
    default: () => {
      return "Contributor Covenant v2.0";
    },
  },
  {
    type: "input",
    name: "Tests",
    message: "How to test your project? ",
    default: () => {
      return "npm run test";
    },
  },
  {
    type: "input",
    name: "Questions",
    message: "How to ask questions about your project",
    default: () => {
      return "contact me on lishengyu1986@gmail.com";
    },
  },
  {
    type: "input",
    name: "Name",
    message: "Enter your GitHub username",
    default: () => {
      return "tonyhotant";
    },
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
