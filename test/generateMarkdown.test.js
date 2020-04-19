const generateMarkdown = require("../utils/generateMarkdown");

describe("generateMarkdown", () => {
  describe("Initialization", () => {
    it("should return a new readme file with all info populated", () => {
      const data = `{
  Title: 'ReadMe_Generator',
  Description: 'Application can generate README file easily',
  Installation: 'npm install',
  Usage: 'node index.js',
  License: 'MIT',
  Contributing: 'Contributor Covenant v2.0',
  Tests: 'npm run test',
  Email: 'lishengyu1986@gmail.com',
  Name: 'tonyhotant'
}`;

      const imgURL = `https://avatars1.githubusercontent.com/u/32546592?v=4`;

      const expect = `
# ReadMe_Generator

![GitHub top language](https://img.shields.io/github/languages/top/tonyhotant/ReadMe_Generator)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Description

Application can generate README file easily

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
npm install
\`\`\`

## Usage

To use the README generator, run the following command:

\`\`\`sh
node index.js
\`\`\`

## License

This project is licensed under the MIT license.

## Contributing

Contributor Covenant v2.0

## Tests

To run the tests, run the following command:

\`\`\`sh
npm run test
\`\`\`

## Questions

<img src="https://avatars1.githubusercontent.com/u/32546592?v=4" alt="avatar" style="border-radius: 16px" width="50" />

If you have any questions about the repo, open an issue in [ReadMe_Generator](https://github.com/tonyhotant/ReadMe_Generator) 
or contact directly at <lishengyu1986@gmail.com>.
`;

      const result = generateMarkdown(data, imgURL);

      expect(result).toEqual(expect);
    });
  });
});
