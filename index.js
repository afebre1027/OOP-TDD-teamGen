const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./page-template.js");

const pageHTML = generatePage();
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
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(intern);
      promptUser();
    });
};
const promptAddMembers = () => {
  fs.writeFile("./dist/page.html", pageHTML, (err) => {
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
console.log(generatePage());
