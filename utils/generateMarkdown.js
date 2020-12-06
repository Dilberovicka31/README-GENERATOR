// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](https://img.shields.io/badge/License-${data.license})]

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

## Description

${data.description}

## Table of Contents


## Installation 

${data.installation}

## Usage

${data.usage}

## License 

${data.license}

## Contributing 

${data.contributing}

## Tests

${data.tests}

## Questions [Questions] 

${data.questions}
${data.additionalQuestions}
`;
}

module.exports = generateMarkdown;
