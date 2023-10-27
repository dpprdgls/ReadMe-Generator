//External dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//Internal modules
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Inquirer prompts for userInputs

const questions = [

    {
        type: 'input',
        message: 'What is your GitHub username? (No @ required)',
        name: 'username,
        default: 'dpprdgls',
        validate: function(value) {
            if (value.length < 1) {
                return console.log('Oops! A valid GitHub username is required.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the name of your Github repository?',
        name: 'repo',
        default: 'Readme-Generator',
        validate: function(value) {
            if (value.length < 1) {
                return console.log('Oops! A valid GitHub repository is required for a badge.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Untitled Project',
        validate: function(value) {
            if (value.length < 1) {
                return console.log('Oops! A valid project title is required.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
        default: 'No description provided.',
        validate: function(value) {
            if (value.length < 1) {
                return console.log('Oops! A valid project description is required.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What are the necessary steps required for the installation of your project if applicable? This will be used in the Installation section.',
        name: "installation"
    },
    {
        type: 'input',
        message: 'Provide instructions and examples of your project usage. This will be used in the Usage section.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'If applicable, please provide the guidelines on how other developers can contribute to your project.',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'If applicable, please provide any tests for your project and provide examples on how to run them.',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Please choose a license for your project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }

];






// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your README.md file has been created!')
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
