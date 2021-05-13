const employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

const engineerQuest = {
    type: 'input',
    message: 'What is the GitHub username?',
    name: 'github',
};

module.exports = {
    Engineer,
    engineerQuest
};