//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//Create an array of questions for user input
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
        name: 'installation',
        message: 'How should the user install this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does this fall under?',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU GPLv3 License',
            'Other',
        ],
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'UserName',
        default: 'walkerj90',
        validate: function (answer) {
            if (answer.length = 0) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'contributions',
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
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
]

//Create a function to write README file
function writeToFile(response) {
    console.log(response);
    return `
    
    # ${response.title}
    ![License](https://img.shields.io/badge/license-${response.license}-blue.svg)
    
    ## Project Description
    ${response.description}
    
    ## Table of Contents
    [Project Description](#Project Description)
    [Installation](#Installation)
    [Usage](#Usage)
    [Contributions](#Contributions)
    [Licensing](#Licensing)
    [Testing](#Testing)
    [Contact](#Questions)
    
    ## Installation
    ${response.installation}
    
    ## Usage 
    ${response.usage}
    
    ## Licensing (#Licensing)
    ${response.license}
    
    ## Contributing
    ${response.contributions}
    
    ## Testing
    ${response.test}
    
    ## Contact
    If you wish to contact me about this project with any comments or questions, you can reach me at my GitHub or Email.
    Link to GitHub: Github.com/${response.UserName}
    Email: ${response.email}`
};


//Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFileSync(`${response.title}-README.MD`, writeToFile(response), (err) => {
            err ? console.log(err) : console.log(`You have sucessfully generated the README for ${response.title}.`)
        })
    })
}

// Function call to initialize app
init();