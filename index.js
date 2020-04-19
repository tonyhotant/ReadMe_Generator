const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
    type: "input",
    name: "Title",
    message: "Please enter your project title: ",
    default: () => {
      return "ReadMe_Generator";
    },
  },
  {
    type: "input",
    name: "Description",
    message: "Enter the description of your project: ",
    default: () => {
      return "Application can generate README file easily";
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
    name: "Email",
    message: "What is the best Email for contact? ",
    default: () => {
      return "lishengyu1986@gmail.com";
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

function promptUser() {
  return inquirer.prompt(questions);
}

function avatarQuery(data) {
  const queryURL = `https://api.github.com/users/${data.Name}`;

  return axios.get(queryURL).then((response) => {
    const imgURL = response.data.avatar_url;
    return imgURL;
  });
}

async function init() {
  console.log("Welcome to use README Generator! ");
  try {
    const answers = await promptUser();

    const imgURL = await avatarQuery(answers);

    const markdownFile = generateMarkdown(answers, imgURL);

    await writeFileAsync("README.md", markdownFile);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
