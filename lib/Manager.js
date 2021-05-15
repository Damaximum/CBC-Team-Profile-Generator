const {Employee, employeeQuest}  = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, special) {
        super(name, id, email);
       this.special = special;
    }

    getOfficeNumber() {
        return this.special;
    }

    getRole() {
        return 'Manager';
    }
}

const managerQuest = [...employeeQuest, 
    {
    type: 'input',
    message: 'What is the office number?',
    name: 'special',
}];

module.exports = {
    Manager,
    managerQuest
};