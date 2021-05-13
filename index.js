const inquirer = require('inquirer');
const {Engineer, engineerQuest} = require('./lib/Engineer');
const {Intern, internQuest} = require('./lib/Intern');
const {Manager, managerQuest} = require('./lib/Manager');
const fs = require('fs');
const htmlTemplate = require('./src/html');

var allMembers = [];

function buildTeam() {
    console.log('Please input team member information: ');
    inquirer.prompt(
        {
            type: 'list',
            message: `What is the employee's role/job title?`,
            name: 'role',
            choices: [`Engineer`, `Intern`, `Manager`]
        }
    )
    .then(answers => {
        switch (answers.role) {
            case 'Engineer':
                inquirer.prompt(engineerQuest).then(engiAnswers => {
                    const engiData = new Engineer(engiAnswers.name, engiAnswers.id, engiAnswers.email, engiAnswers.github)
                    console.log(engiData);
                    allMembers.push(engiData);
                    newMember();
                });
                break;
            case 'Intern':
                inquirer.prompt(internQuest).then(internAnswers => {
                    const internData = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
                    console.log(internData);
                    allMembers.push(internData);
                    newMember();
                });
                break;
            case 'Manager':
                inquirer.prompt(managerQuest).then(manaAnswers => {
                    const manaData = new Manager(manaAnswers.name, manaAnswers.id, manaAnswers.email, manaAnswers.officeNum)
                    console.log(manaData);
                    allMembers.push(manaData);
                    newMember();
                });
                break;
        }
    })
    .catch(err => {
        throw err;
    });
}

function newMember() {
    inquirer.prompt(
        {
            type: 'confirm',
            message: `Would you like to add another team member?`,
            name: 'newMember'
        }
    )
    .then(answer => {
        if (answer.newMember) {
            buildTeam();
        } else {
            createHTML(allMembers);
        };
    });
};

function createHTML(allMembers) {
    fs.writeFile('./dist/index.html', htmlTemplate(allMembers), err => {
        if (err) return console.log(err);
    });

    console.log('HTML created!');
};


buildTeam();