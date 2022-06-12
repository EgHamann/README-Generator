// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");
const { findSourceMap } = require('module');

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
        name: 'install',
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
    },
    {
        type: 'input',
        name: 'credits',
        message: "List collaborators involved"
    },
    {
        type: 'list',
        name: 'liscence',
        message: 'Please select the license.',
        choices: [
            "APACHE 2.0",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ]
    }
];

inquirer.prompt(questions).then(function(data) {
    console.log(data);

    var readme = generateMarkdown(data);
    console.log(readme);
    fs.writeFile("./dist/README.md", readme, function(err) {
        if (err) throw err
        console.log("file written");
    })
})