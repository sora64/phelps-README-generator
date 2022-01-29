// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Function to initialize app
const init = () => {
    // Array of questions for user input
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project. (Required)',
            validate: instructionsInput => {
                if (instructionsInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'contributingConfirm',
            message: 'Would you like to allow other users to collaborate on this project?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide instructions for developers wishing to collaborate.',
            when: ({contributingConfirm}) => {
                if (contributingConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please enter contributing instructions!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to provide some tests for your application?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write some tests for your application with instructions on how to run them. If you have none, refer users to the "Usage" section above.',
            when: ({confirmTests}) => {
                if (confirmTests) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please enter testing information!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What licence are you using for your application?',
            choices: ['Apache', 'Boost', 'Eclipse', 'GNU GPL v3', 'IBM', 'ISC', 'MIT', 'Mozilla', 'SIL', 'Unlicense', 'WTFPL', 'Zlib', 'none']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email address!');
                    return false;
                }
            }
        }
    ]);
};

// Function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// Initialization function call
init()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(readmeMarkdown => {
        return writeToFile(readmeMarkdown);
    })
    .then(writeToFileResponse => {
        console.log(writeToFileResponse);
    })
    // Error handling
    .catch(err => {
        console.log(err);
    });

// function init() {}