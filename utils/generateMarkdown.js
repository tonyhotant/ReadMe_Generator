function generateMarkdown(data) {
  return `
# ${data.name}

# ${data.title}

# ${data.description}
`;
}

module.exports = generateMarkdown;
