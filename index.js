const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
//  const generateMarkdown = require("./generateMarkdown");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title for your markdown file?",
  },
  {
    type: "input",
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
    message: "What licenses do you want to use",
    choices: [
      "MPL%202.0-brightgreen.svg",
      "MIT-yellow.svg",
      "Apache%202.0-blue.svg",
      "GPLv3-blue.svg",
      "None",
    ],
    name: "license",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are testing instructions?",
  },
  {
    type: "input",
    name: "questions",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "additionalQuestions",
    message: "What is your email for additional questions?",
  },
];

// function to initialize program and write file
function init() {
  inquirer.prompt(questions).then((response) => {
    fs.writeFileSync("TEST_README.md", generateMarkdown(response));
  });
}

// function call to initialize program
init();
