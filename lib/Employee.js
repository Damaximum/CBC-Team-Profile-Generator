
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

const employeeQuest = [
    {
        type: 'input',
        message: `What is the employee's name?`,
        name: 'name',
    },
    {
        type: 'input',
        message: `What is the employee's ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the employee's email?`,
        name: 'email',
    }
]

module.exports = {
    Employee,
    employeeQuest
};