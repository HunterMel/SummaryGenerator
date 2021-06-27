//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
//const Manager = require("./lib/Manager")
//const Employee = require("./lib/Employee")

const managerCard = manager => {
        return `
    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">${manager.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${manager.id}</li>
            <li class="list-group-item">${manager.email}</li>
        </ul>
        <div class="card-body">
            <p class="card-link">Office Number: ${manager.officeNum}</p>
        </div>
    </div>    
        `;
    };

    const engineerCard = engineer => {
        return `
    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <p class="card-text">${engineer.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineer.id}</li>
            <li class="list-group-item">${engineer.email}</li>
        </ul>
        <div class="card-body">
            <p class="github"> GitHub: <a href="https://github.com/${engineer.gitHubUser}" class="card-link"></a></p>
        </div>
    </div>    
        `;
    };

    const internCard = intern => {
        return `
    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
        <img src="http://tinygraphs.com/labs/isogrids/hexa" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <p class="card-text">${intern.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${intern.id}</li>
            <li class="list-group-item">${intern.email}</li>
        </ul>
        <div class="card-body">
            <p class="school"> School: <${intern.school}"></p>
        </div>
    </div>    
        `;
}

const generateHTML = employeesData => { 
    return `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
          <link rel="stylesheet" href="./src/style.css">
          <title>Team Profiles</title>
        </head>
        <body>
        
        ${employeesData.map((employee) =>{
          
          switch(employee.getRole()) {
            case 'Manager':
             return managerCard(employee)
              break;
            case 'Engineer':
              return engineerCard(employee)
              break;
            case 'Intern':
              return internCard(employee)
              break;
          }
        }).join('')
      }
        
        <script src="index.js"></script>
        </body>
      </html>
    `;
  }; 

module.exports = generateHTML;