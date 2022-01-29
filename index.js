// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// const path = require('path');
// const { FILE } = require('dns');

// TODO: Create a function to initialize app
const init = () => {
    // TODO: Create an array of questions for user input
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
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
    .catch(err => {
        console.log(err);
    });

// function init() {}

// Function call to initialize app
// init();