// creates the whole team
const generateTeam = (team) => {
  const html = [];

  // creates manager section
  const generateManager = (manager) => {
    let managerHtml = `
<div class="card" style="width: 18rem;">
<div class="card-header">
${manager.name}
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID:${manager.id}</li>
<li class="list-group-item">Email:${manager.email}</li>
<li class="list-group-item">Call:${manager.officeNumber}</li>
</ul>
   `;
    html.push(managerHtml);
  };

  // creates engineer section
  const generateEngineer = (engineer) => {
    let engineerHtml = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        ${engineer.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${engineer.id}</li>
        <li class="list-group-item">Email:${engineer.email}</li>
        <li class="list-group-item">Call:${engineer.officeNumber}</li>
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
        ${intern.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${intern.id}</li>
        <li class="list-group-item">Email:${intern.email}</li>
        <li class="list-group-item">Call:${intern.officeNumber}</li>
    </ul>
</div>
    `;
    html.push(internHtml);
  };

  // loop created for employees

  // for (let i = 0; i < employee.length; i++) {
  //   if (team[i].getRole() === "Manager") {
  //     generateManager(team[i]);
  //   } else if (team[i].getRole() === "Engineer") {
  //     generateEngineer(team[i]);
  //   } else if (team[i].getRole() === "Intern") {
  //     generateIntern(team[i]);
  //   }
  // }

  //  join all together

  return html.join("");
};

module.exports = (team) => {
  console.log(team);
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
      <link rel="import" href="style.css" type="text/css" </head>
  
  <body>
  
      <header>
          <h1> Team Built </h1>
      </header>

      <main>${generateTeam(team)}</main>
  
  </body>
  
  </html>
  `;
};
