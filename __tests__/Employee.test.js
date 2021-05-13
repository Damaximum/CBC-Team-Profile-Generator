const { Employee } = require('../lib/Employee');

const name = 'Johnny Test';
const id = 1337;
const email = 'test@email.com';

describe(`Employee`, () => {
    it(`creates an Employee object`, () => {
        const employee = new Employee(name, id, email);

        expect(typeof(employee)).toBe('object');
    })
});

describe(`getName`, () => {
    it(`gets a name of the employee`, () => {
        const employee = new Employee(name, id, email);

        expect(employee.getName()).toBe(name);
    });
});

describe(`getId`, () => {
    it(`gets a ID of the employee`, () => {
        const employee = new Employee(name, id, email);

        expect(employee.getID()).toBe(id);
    });
});

describe(`getEmail`, () => {
    it(`gets a email of the employee`, () => {
        const employee = new Employee(name, id, email);

        expect(employee.getEmail()).toBe(email);
    });
});

describe(`getRole`, () => {
    it(`gets the role of the employee`, () => {
        const employee = new Employee(name, id, email);

        expect(employee.getRole()).toBe('Employee');
    });
});