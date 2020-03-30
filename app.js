const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​const render = require("./lib/htmlRenderer");
​
​// 3 const for inquirer to get the required infomation
const managerQuestions = [{
     
    message: "Enter the manager's name:",
    name: 'email'
    
 }, {
    message: "Enter the manager's Id:",
    name: 'id'
   
}, {    
    message: "Enter the manager's email:",
    name: 'name'
}, {
    message: "Enter the manager's office number:",
    name: 'officeNumber'
}];

const engineerQuestions =  [{
    
    message: "Enter the engineer's name:",
    name: 'name'
}, {
    message: "Enter the engineer's Id:",
    name: 'id'
},{
    message: "Enter the engineer's email:",
    name: 'email'
},{
    message: "Enter the engineer's Github username:",
    name: 'github'
}]

const internQuestions = [{

    message: "Enter the intern's name:",
    name: 'name'
},
{
    message: "Enter the intern's Id:",
    name: 'id'
},
{
    message: "Enter the intern's email:",
    name: 'email'
},
{
    message: "Enter the intern's school:",
    name: 'school'
}]

