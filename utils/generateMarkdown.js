function generateMarkdown(data, imgURL) {
  return `
# ${data.Title}

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Description

${data.Description}

## Table of Contents

* *[Title](#Title)*
* *[Description](#Description)*
* *[Installation](#installation)*
* *[Usage](#Usage)*
* *[License](#License)*
* *[Contributing](#Contributing)*
* *[Tests](#Tests)*
* *[Questions](#Questions)*

## Installation

To install necessary dependencies, run the following command:

\`\`\`sh
${data.Installation}
\`\`\`

## Usage

To use the README generator, run the following command:

\`\`\`sh
${data.Usage}
\`\`\`

## License

This project is licensed under the ${data.License} license.

## Contributing

${data.Contributing}

## Tests

To run the tests, run the following command:

\`\`\`sh
${data.Tests}
\`\`\`

## Questions

![GitHub Profile](<img src="${imgURL}" alt="avatar" style="border-radius: 16px" width="30" />)

If you have any questions about the repo, open an issue in [${data.Title}](https://api.github.com/${data.Name}/${data.Title}) or contact directly at <${data.Email}>.
`;
}

module.exports = generateMarkdown;
