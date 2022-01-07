const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
// const generateSite = require('./lib/generateSite');

const teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "please enter your name",
      },
      {
        type: "input",
        name: "id",
        message: "please enter your ID Number",
      },
      {
        type: "input",
        name: "email",
        message: "please enter your Email address",
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

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list", 
        name: "menu",
        message: "What employee class would you like to choice?",
        choices: ["add Manager", "add Intern", "add Engineer"],
      },
      {
        type: "list",
        name: "menu",
        message: "What employee class would you like to choice?",
        choices: ["add Manager", "add Intern", "add Engineer"],
      },
      {
        type: "list",
        name: "menu",
        message: "What employee class would you like to choice?",
        choices: ["add Manager", "add Intern", "add Engineer"],
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
          promptTeam();
      }
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What name would you like to call yourself?",
      },
      {
        type: "input",
        name: "name",
        message: "What name would you like to call yourself?",
      },
      {
        type: "input",
        name: "name",
        message: "What name would you like to call yourself?",
      },
      {
        type: "input",
        name: "name",
        message: "What name would you like to call yourself?",
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
        type: "list",
        name: "menu",
        message: "What employee class would you like to choice?",
        choices: ["add Manager", "add Intern", "add Engineer"],
      },
      {
        type: "list",
        name: "menu",
        message: "What employee class would you like to choice?",
        choices: ["add Manager", "add Intern", "add Engineer"],
      },
      {
        type: "list",
        name: "menu",
        message: "What employee class would you like to choice?",
        choices: ["add Manager", "add Intern", "add Engineer"],
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
