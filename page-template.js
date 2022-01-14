// creates the whole team
const generateTeam = (team) => {
  const html = [];

  // creates manager section
  const generateManager = (manager) => {
    let managerHtml = `
<div class="card" style="width: 18rem;">
  <div class="card-header">
    <h2>${manager.name}</h2>
    <h4 class="title"><i class="far fa-id-badge"></i>Manager</h4>
    </div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${manager.id}</li>
<li class="list-group-item">Email: <a href='mailto: ${manager.email}'>${manager.email}</a></li>
<li class="list-group-item">Call: ${manager.officeNumber}</li>
</ul>
</div>
   `;
    html.push(managerHtml);
  };

  // creates engineer section
  const generateEngineer = (engineer) => {
    let engineerHtml = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        <h2>${engineer.name}</h2>
        <h4 class="title"><i class="fas fa-glasses"></i>Engineer</h4>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
</div>
    `;
    html.push(engineerHtml);
  };

  // creates intern section
  const generateIntern = (intern) => {
    let internHtml = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        <h2>${intern.name}</h2>
        <h4 class="title"><i class="far fa-user"></i>Intern</h4>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href='mailto:${intern.email}'>${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
    `;
    html.push(internHtml);
  };

  // loop created for employees

  for (let i = 0; i < team.length; i++) {
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
};

module.exports = (team) => {
  console.log("this is my team", team);
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="import" href="style.css" type="text/css">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/102433624d.js" crossorigin="anonymous"></script>
</head>
  
  <body>
  
      <header>
          <h1> Team Built </h1>
      </header>

      <main>${generateTeam(team)}</main>
  
  </body>
  
  </html>
  `;
};
