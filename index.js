// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please input a valid project title.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please input a valid project description.");
            }
            return true;
        }
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
        message: "What is your GitHub username?",
        name: 'username',
        default: 'connietran-dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
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
function writeToFile(filename, data) {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file has been generated sucessfully.")
    });
}



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();