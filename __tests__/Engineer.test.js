const { Engineer } = require('../lib/Engineer');

const name = 'Johnny Test';
const id = 1337;
const email = 'test@email.com';
const github = 'JTestdaBest';

describe(`Engineer`, () => {
    it(`creates an Engineer object`, () => {
        const engineer = new Engineer(name, id, email, github);

        expect(typeof(engineer)).toBe('object');
    })
});

describe(`getName`, () => {
    it(`gets a name of the Engineer`, () => {
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getName()).toBe(name);
    });
});

describe(`getId`, () => {
    it(`gets a ID of the Engineer`, () => {
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getID()).toBe(id);
    });
});

describe(`getEmail`, () => {
    it(`gets a email of the Engineer`, () => {
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getEmail()).toBe(email);
    });
});

describe(`getGitHub`, () => {
    it(`gets a github of the Engineer`, () => {
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getGithub()).toBe(github);
    });
});

describe(`getRole`, () => {
    it(`gets the role of the Engineer`, () => {
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getRole()).toBe('Engineer');
    });
});