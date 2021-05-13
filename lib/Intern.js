const {Employee, employeeQuest}  = require('./Employee');

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

const internQuest = [...employeeQuest,
    {
    type: 'input',
    message: 'What school did they graduate from?',
    name: 'school',
}];

module.exports = {
    Intern,
    internQuest
};