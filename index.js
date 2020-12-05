const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title for your markdown file?",
  },
  {
    type: "editor",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What packages are required to install your project?",
  },

  {
    type: "input",
    name: "usage",
    message: "What is the product used for and how?",
  },
  {
    type: "list",
    message: " What licenses do you want to use",
    choices: [
      "MIT License",
      "Mozilla public License 2.0",
      "Apache license 2.0",
      " GNU General Public License v3.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "Contributing",
    message: "What are the contribution guidelines?",
  },
  {
    type: " input",
    name: "Tests",
    message: "What are testing instructions?",
  },
  {
    type: "input",
    name: "Questions",
    message: " What is your GitHub username?",
  },
  {
    type: "input",
    name: "Additional questions",
    message: "What is your email for additional questions?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
