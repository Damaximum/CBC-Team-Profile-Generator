const inquirer = require('inquirer');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
const fs = require('fs');
const cardTemplate = require('./src/cardTemplate');
const htmlTemplate = require('./src/html');



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
                inquirer.prompt().then(engiAnswers => {
                    const engiData = new engineer(answers.name, answers.id, answers.email, engiAnswers.github)
                });
                console.log(engiData);
                cardTemplate(engiData);
                newMember();

            case 'Intern':
                inquirer.prompt().then(internAnswers => {
                    const internData = new engineer(answers.name, answers.id, answers.email, internAnswers.school)
                })
                console.log(internData);
                cardTemplate(internData);
                newMember();

            case 'Manager':
                inquirer.prompt().then(manaAnswers => {
                    const manaData = new engineer(answers.name, answers.id, answers.email, manaAnswers.officeNum)
                })
                console.log(manaData);
                cardTemplate(manaData);
                newMember();

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
            message: `Would you like to add a team member?`,
            name: 'newMember'
        }
    )
    .then(newMember => {
        if (newMember) {
            buildTeam();
        } else {
            createHTML();
        }
    });
};

function createHTML() {

}


// buildTeam();