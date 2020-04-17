function generateMarkdown(data) {
  return `
# ${data.Title}

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Description

${data.Description}

## Table of Contents

* [Title](#Title)
* [Description](#Description)
* [Installation](#installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${data.Installation}

## Usage

${data.Usage}

## License

${data.License}

## Contributing

${data.Contributing}

## Tests

${data.Tests}

## Questions

${data.Questions}

![GitHub Profile](link)
[GitHub Email](link)
`;
}

module.exports = generateMarkdown;
