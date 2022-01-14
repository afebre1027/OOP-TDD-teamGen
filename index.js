const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./page-template.js");

// const pageHTML = generatePage();
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter Managers name!",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Managers ID#!",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter Managers Email address!",
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
      promptUser();
    });
};

const promptUser = () => {
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
promptUser().then((answers) => console.log(answers));

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter Engineers name!",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Engineers ID Number!",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter Engineers Email address!",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter Engineers Github Username!",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptUser();
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter Interns name!",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Interns ID Number!",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter Interns Email address!",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the School you attend!",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
      );
      teamMembers.push(intern);
      promptUser();
    });
};
const promptAddMembers = () => {
  const pageHtml = generatePage(teamMembers)
  fs.writeFile("./dist/page.html", pageHtml, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("page created!")

    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("css created!")
    })

  });
};

