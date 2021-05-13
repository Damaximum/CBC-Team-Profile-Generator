const { Manager } = require('../lib/Manager');

const name = 'Johnny Test';
const id = 1337;
const email = 'test@email.com';
const officeNum = 117;

describe(`Manager`, () => {
    it(`creates an Manager object`, () => {
        const manager = new Manager(name, id, email, officeNum);

        expect(typeof(manager)).toBe('object');
    })
});

describe(`getName`, () => {
    it(`gets a name of the Manager`, () => {
        const manager = new Manager(name, id, email, officeNum);

        expect(manager.getName()).toBe(name);
    });
});

describe(`getId`, () => {
    it(`gets a ID of the Manager`, () => {
        const manager = new Manager(name, id, email, officeNum);

        expect(manager.getID()).toBe(id);
    });
});

describe(`getEmail`, () => {
    it(`gets a email of the Manager`, () => {
        const manager = new Manager(name, id, email, officeNum);

        expect(manager.getEmail()).toBe(email);
    });
});

describe(`getOfficeNumber`, () => {
    it(`gets an office number of the Manager`, () => {
        const manager = new Manager(name, id, email, officeNum);

        expect(manager.getOfficeNumber()).toBe(officeNum);
    });
});

describe(`getRole`, () => {
    it(`gets the role of the Manager`, () => {
        const manager = new Manager(name, id, email, officeNum);

        expect(manager.getRole()).toBe('Manager');
    });
});