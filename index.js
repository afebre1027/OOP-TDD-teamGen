const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const output = path.join(OUTPUT_DIR, "html.html");
// const generateSite = require('./lib/generateSite');

const teamMembers = [];

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What employee class would you like to choice?",
        choices: ["add Manager", "add Intern", "add Engineer", "finished"],
      },
    ])
    .then((selectedChoice) => {
      switch (selectedChoice.menu) {
        case "add Manager":
          promptManager();
          break;
        case "add Intern":
          promptIntern();
          break;
        case "add Engineer":
          promptEngineer();
          break;
        default:
          promptAddMembers();
      }
    });
};

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name!",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your ID Number!",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your Email address!",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter your Office Number!",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};



const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name!",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your ID Number!",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your Email address!",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your Github Username!",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teams.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name!",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your ID Number!",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your Email address!",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter your Email address!",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
};
const promptAddMembers = () => {
  console.log("team should be created");
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf8");
  }
  promptMenu();
};
