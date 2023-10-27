//External dependencies
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
//Internal modules
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Inquirer prompts for userInputs

const questions = [

    {
        type: 'input',
        message: 'What is your GitHub username? (No @ required)',
        name: 'username',
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





//Function to create the README file
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
async function init() {
    try {
        //Inquirer prompts for userResponses
        const userResponses = await inquirer.prompt(questions);
        console.log('Your responses are: ', userResponses);
        console.log('I appreciate your responses! I will fetch your GitHub data next...');

        //Call GitHub API for user infomation
        const userInfo = await api.getUser(userResponses);
        console.log('Your GitHub user information is: ', userInfo);

        //Pass Inquirer userReponses and GitHub userInfo into generateMardown
        console.log('Generating your README.md file...');
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        //write to file
        await writeFileAsync('ExampleReadme.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
