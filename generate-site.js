const generateTeam = (team) => {
  const html = [];

  const generateManager = (manager) => {
    let managerHtml = `
    all html information will go here. need list here
    `;
    html.push(managerHtml);
  };

  const generateEngineer = (engineer) => {
    let engineerHtml = `
    all html information will go here. need list here
    `;
    html.push(engineerHtml);
  };

  const generateIntern = (intern) => {
    let internHtml = `
  all html information will go here. need list here
    `;
    html.push(internHtml);
  };
};

// loop created for employees

for (let i = 0; i < employees.length; i++) {
  if (team[i].getRole() === "Manager") {
    generateManager(team[i]);
  } else if (team[i].getRole() === "Engineer") {
    generateEngineer(team[i]);
  } else if (team[i].getRole() === "Intern") {
    generateIntern(team[i]);
  }
}

//  join all together

return html.join("");

module.exports = (team) => {
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
    </head>
    <body>
        <header>Team Generator</header>
    
        <main>
            
        </main>
        
    </body>
    </html>
    `
};
