const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt(questions
    /* Pass your questions in here */
  )
  .then((answers) => {
    // Use user feedback for... whatever!!
    
    writeToFile();
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

const questions = [
  //prompt user github username

];

function writeToFile(fileName, data) {}

function init() {}

init();
