const { Intern } = require('../lib/Intern');

const name = 'Johnny Test';
const id = 1337;
const email = 'test@email.com';
const school = 'University of Cool';

describe(`Intern`, () => {
    it(`creates an Intern object`, () => {
        const intern = new Intern(name, id, email, school);

        expect(typeof(intern)).toBe('object');
    })
});

describe(`getName`, () => {
    it(`gets a name of the Intern`, () => {
        const intern = new Intern(name, id, email, school);

        expect(intern.getName()).toBe(name);
    });
});

describe(`getId`, () => {
    it(`gets a ID of the Intern`, () => {
        const intern = new Intern(name, id, email, school);

        expect(intern.getID()).toBe(id);
    });
});

describe(`getEmail`, () => {
    it(`gets a email of the Intern`, () => {
        const intern = new Intern(name, id, email, school);

        expect(intern.getEmail()).toBe(email);
    });
});

describe(`getSchool`, () => {
    it(`gets the school of the Intern`, () => {
        const intern = new Intern(name, id, email, school);

        expect(intern.getSchool()).toBe(school);
    });
});

describe(`getRole`, () => {
    it(`gets the role of the Intern`, () => {
        const intern = new Intern(name, id, email, school);

        expect(intern.getRole()).toBe('Intern');
    });
});