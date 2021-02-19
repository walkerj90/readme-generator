// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?'
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'How should the user install this project?'
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What type of license does this fall under?',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU GPLv3 License',
            'ISC License',
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Who else contributed to this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Who else contributed to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Is there any way to test this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        filter: trimAnswer,
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();