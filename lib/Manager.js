const {Employee, employeeQuest}  = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super(name, id, email);
       this.officeNum = officeNum;
    }

    getOfficeNumber() {
        return this.officeNum;
    }

    getRole() {
        return 'Manager';
    }
}

const managerQuest = [...employeeQuest, 
    {
    type: 'input',
    message: 'What is the office number?',
    name: 'officeNum',
}];

module.exports = {
    Manager,
    managerQuest
};