//packages needed
const inquirer = require('inquirer');
const fs = require('fs');

// classes
const Manager = require('./lib/Manager');

// employees data
const employeesData = [];

const generateHTML = require('./src/html-template.js')

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

        console.log(newManager);

        // add this new manager to our employees data
        employeesData.push(newManager);

        askEmployeeType();
    })

};


// Ask whether they would like to Add an Engineer or an Intern
const askEmployeeType = () => {
    inquirer.prompt([{
        type: "list",
        name:  "employeeType",
        message: "Which employee type would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "None"
        ]
    }])
    .then((answers) => {
        if(answers.employeeType == "Engineer") {
            // call the function to add an Engineer

        } else if(answers.employeeType == "Intern") {
            // call the function to add an Intern
            
        } else {
            // call generateHTML
        }
    })
}


// If they choose Engineer, ask about Engineer Info -> add this new Engineer to our employees data
const addEngineer = () => {
}


// If they choose Intern, ask about Intern Info -> add this new Intern to our employees data
const addIntern = () => {

}

// Ask again whether Engineer, Intern or None
// If None, then generate the HTML page and use the employees data that we got from the prompts
const generateHTML = () => {

}





const teamMembers = teamMemberData => {
    console.log(`
======================
Add a New Team Member
======================
`);
//if there is np other team members
    if (!teamMemberData.employee) {
        teamMemberData.employee = [];
    }
    return inquirer.prompt([
        {    
            type: 'list',
            name: 'role',
            message: 'Please enter your role.(Required)',
            choices: ['Engineer', 'Intern'],
            validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('Please enter your role.');
                return false;
            }
        }
        },
        
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information.',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines.',
            default: true
        },
        {   type: 'input',
            name: 'tests',
            message: 'Enter testing information.',
            default: true
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license for your read me. Check all that apply.',
            choices: ['General Public License', 'Apache 2.0', 'MIT license', 'ISC license']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        
    ]);
};