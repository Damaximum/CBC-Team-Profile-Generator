const employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

const internQuest = {
    type: 'input',
    message: 'What school did they graduate from?',
    name: 'school',
};

module.exports = {
    Intern,
    internQuest
};