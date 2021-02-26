# Readme-Generator
![License](https://img.shields.io/badge/license-MIT-blue.svg)  

This application utilizes various command line inputs to create a README.md file to be used when creating a new project. The created README.md file is genereated when the user inputs from the terminal using Inquirer.

The user will be asked about the projects title, description, usage information, installation, License with badge included, test instructions if applicable, contributions as well as a working table of contents. 

* Video
<iframe width="885" height="498" src="https://www.youtube.com/embed/ZFC6GAc2uSs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Installation
Simply run the terminal of your choice and input into the terminal;

    * npm install

# Usage
    * Clone Repository
    * Open in terminal of choice
    * Install necessary dependencies with npm install
    * Run the application by typing; node index.js  

# Languages and Technologies Used
    * Javascript
    * Node
    * Inquirer

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project


## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
