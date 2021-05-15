const inquirer = require('inquirer');
const {Engineer, engineerQuest} = require('./lib/Engineer');
const {Intern, internQuest} = require('./lib/Intern');
const {Manager, managerQuest} = require('./lib/Manager');
const fs = require('fs');
const htmlTemplate = require('./src/html');

var allMembers = [];

function makeManager() {
    console.log('Please enter Manager information');
    inquirer.prompt(managerQuest).then(manaAnswers => {
        const manaData = new Manager(manaAnswers.name, manaAnswers.id, manaAnswers.email, manaAnswers.special)
        manaData.icon = '<i class="far fa-chart-bar fa-2x"></i>';
        manaData.special = `Office Number: ${manaData.special}`;
        manaData.role = 'Manager';
        console.log(manaData);
        allMembers.push(manaData);
        buildTeam();
    });
}

function buildTeam() {
    console.log('Please input team member information: ');
    inquirer.prompt(
        {
            type: 'list',
            message: `What is the employee's role/job title?`,
            name: 'role',
            choices: [`Engineer`, `Intern`]
        }
    )
    .then(answers => {
        switch (answers.role) {
            case 'Engineer':
                inquirer.prompt(engineerQuest).then(engiAnswers => {
                    const engiData = new Engineer(engiAnswers.name, engiAnswers.id, engiAnswers.email, engiAnswers.special)
                    engiData.icon = '<i class="fas fa-glasses fa-2x"></i>';
                    engiData.special = `<a href='${engiAnswers.special}' > Github: ${engiAnswers.special} </a>`;
                    engiData.role = answers.role;
                    console.log(engiData);
                    allMembers.push(engiData);
                    newMember();
                });
                break;
            case 'Intern':
                inquirer.prompt(internQuest).then(internAnswers => {
                    const internData = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.special)
                    internData.icon = '<i class="fas fa-eye fa-2x"></i>';
                    internData.special = `School: ${internData.special}`;
                    internData.role = answers.role;
                    console.log(internData);
                    allMembers.push(internData);
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


makeManager();