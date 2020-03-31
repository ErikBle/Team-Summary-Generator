const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const employees = [];

// 3 const for inquirer to get the required infomation
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

async function start() {
    try {

        // Getting manager info into a const, then pushing that into the array
        const managerInfo = await inquirer.prompt(managerQuestions);
        const manager = new Manager (managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.offnum);
        employees.push(manager);

        // Getting # of Engineers + pushing all the info into the array
        const numOfEng = await inquirer.prompt({ type: "list" , message: "How many engineer's are there?", name: "number", choices: [1,2,3,4]})
        for (var i = 0; i < numOfEng.number; i++){
             const engInfo = await inquirer.prompt(engineerQuestions)
             const engineer = new Engineer(engInfo.name, engInfo.id, engInfo.email, engInfo.github)
            employees.push(engineer)
         };

      // Getting # of Interns + pushing all the info into the array
      const numofInt = await inquirer.prompt({ type: "list", message: "How many intern's are there?", name: "number", choices: [1,2,3,4]})
      for (var y = 0; y <numofInt.number; y++){
          const intInfo = await inquirer.prompt(internQuestions)
          const intern = new Intern(intInfo.name, intInfo.id, intInfo.email, intInfo.school)
          employees.push(intern)
      };
      

        const htmlfile = await render(employees);

       // Checks to see if the output folder exists, creates one if not
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        };


        // Creates the html file
        fs.writeFile(outputPath, htmlfile, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("Success");
            };
        });

    } catch (e) {
        console.log(e);
    };
};

// Calls the function which starts the app
start();