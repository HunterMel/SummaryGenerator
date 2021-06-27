//packages needed
const inquirer = require('inquirer');
const fs = require('fs');

// classes
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
//const Employee = require('./lib/Employee')


// employees data
const employeesData = [];

const generateHTML = require('./src/generateHTML2.js')

// pseudocode

// Ask the user about the team manager's info (name, id, email and officenumber) 
const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is your team manager\'s name? (Required)',
            validate: managerInput => {
                if (managerInput){
                    return true;
                } else {
                    console.log('Please enter your mamager\'s name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please input your ID (Required)',
            validate: idInput => {
                if (idInput){
                    return true;
                } else {
                    console.log('Please provide your employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please enter your office number.',
            default: true
        },
    ])
    .then((answers) => {
        // create a new manager
        const newManager = new Manager(answers.manager, answers.employeeId, answers.email, answers.officeNum)

        //console.log(newManager);

        // add this new manager to our employees data
        employeesData.push(newManager);

        askEmployeeType();
    })

};

// Ask whether they would like to Add an Engineer or an Intern
const askEmployeeType = () => {
    console.log(`
======================
Add a New Team Member
======================
`);
//if there is np other team members

    return inquirer.prompt([
        {    
            type: 'list',
            name: 'role',
            message: 'Please enter your role.(Required)',
            choices: ['Engineer', 'Intern', 'Manager', 'None'],
            //validate: roleInput => {
            //if (roleInput) {
                //return true;
        },
        
    ]).then((answer)=>{
        //console.log(answer.role)

         if(answer.role == "Engineer") {
            // call engineerQuestions
            engineerQuestions()
        } else if (answer.role == "Intern") {
            //call internQuestions
            internQuestions()
            ;
        } else {
            console.log(employeesData)
            //call generateHTML
            const generateTeam = generateHTML(employeesData);
            //console.log(generateTeam)
            fs.writeFile('./dist/index.html', generateTeam, err => {
                if (err) throw err;

                console.log('HTML Generated!');
            })
        }
    })
};
//questions for engineer
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name? (Required)',
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter your employee ID number. (Required)',
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered your employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is you Github username? (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered your Github username.');
                    return false;
                }
            }
        },
    ]).then((answer) => {
        const newEngineer = new Engineer(answer.engineerName, answer.employeeID, answer.email, answer.username)
        employeesData.push(newEngineer)

        askEmployeeType()
    })
}

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name? (Required)',
            validate: internInput => {
                if (internInput){
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter your employee ID number. (Required)',
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered your employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
        {
            type: 'input',
            name: 'schoolInput',
            message: 'Please enter your school name.',
            default: true
        },
    ]).then((answer) => {
        const newIntern = new Intern(answer.internName, answer.employeeID, answer.email, answer.schoolInput)
        employeesData.push(newIntern)

        askEmployeeType()
    })
}                 

addManager()