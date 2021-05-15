const {Employee, employeeQuest} = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, special) {
        super(name, id, email);
        this.special = special;
    }

    getGithub() {
        return this.special;
    }

    getRole() {
        return 'Engineer';
    }

}

const engineerQuest = [...employeeQuest, 
    {
    type: 'input',
    message: 'What is the GitHub username?',
    name: 'special',
}];

module.exports = {
    Engineer,
    engineerQuest
};