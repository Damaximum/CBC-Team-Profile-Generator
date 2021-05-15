const {Employee, employeeQuest}  = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, special) {
        super(name, id, email);
        this.special = special;
    }

    getSchool() {
        return this.special;
    }

    getRole() {
        return 'Intern';
    }
}

const internQuest = [...employeeQuest,
    {
    type: 'input',
    message: 'What school did they graduate from?',
    name: 'special',
}];

module.exports = {
    Intern,
    internQuest
};