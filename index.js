// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the Title of this project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter a description for this project."
    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter installation instructions."
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter usage instructions."
    },
    {
        type: 'image',
        name: 'useImage',
        message: "Provide an image of the working application."
    },
    {
        type: 'file',
        name: 'useVid',
        message: "Provide a video of the application in use."
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
