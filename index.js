const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generatehtml");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const team = [];

start();

function start(){
    console.log("welcome to my team generator app");
    mainmenu();
}

async function mainmenu(){
    const response = await inquirer.prompt({
        message:"choose an action", 
        name: "action",
        type: "list",
        choices: ["add manager", "add engineer", "add intern", "finish"]
    });

    switch(response.action){
        case "add manager": return addManager();
        case "add engineer": return addEngineer();
        case "add intern": return addIntern();
        case "finish": return finish();
    }
}

async function addManager(){
    const response = await inquirer.prompt([
        {
            message: "what is the managers name",
            name: "name",
        },
        {
            message: "managers id",
            name: "id"

        },
        {
            message: "email adress",
            name: "email",
        },
        {
            message: "office number",
            name: "officeNumber",   
        }
    ]);

    const mgr = new Manager(response.name, response.id, response.email, response.officeNumber);
    team.push(mgr);
    console.log("manager created");
    mainmenu();
}

async function addEngineer(){
    const response = await inquirer.prompt([
        {
            message: "what is the engineers name",
            name: "name",
        },
        {
            message: "engineers id",
            name: "id"

        },
        {
            message: "email adress",
            name: "email",
        },
        {
            message: "github",
            name: "github",   
        }
    ]);

    const Engineer = new Engineer(response.name, response.id, response.email, response.github);
    team.push(Engineer);
    console.log("Engineer created");
    mainmenu();


}

async function addIntern(){
    const response = await inquirer.prompt([
        {
            message: "what is the interns name",
            name: "name",
        },
        {
            message: "intern id",
            name: "id"

        },
        {
            message: "email adress",
            name: "email",
        },
        {
            message: "office number",
            name: "officeNumber",   
        }
    ]);

    const Intern = new Intern(response.name, response.id, response.email, response.school);
    team.push(intern);
    console.log("intern created");
    mainmenu();
}

function finish(){
    const html = generateHTML(team);
    fs.writeFileSync("./dist/team.html", html);
    console.log("thank you for using my team generator app");
    process.exit();
}