const Engineer = require("../lib/engineer");

describe('Engineer tests', () => {
    let engineer;
    const employeeId = 1;
    const name = "Lavanya Virushan";
    const email = "lavanya@gmail.com";
    const github = "lavanyavirushan"
    const role = "Engineer"

    beforeEach(() => {
        engineer = new Engineer(employeeId, name, email, github);
    });

    test("Set GitHUb account in constructor", () => {
        expect(engineer.github).toBe(github);
    });

    test("Get GitHub account in getter", () => {
        expect(engineer.getGithub()).toBe(github);
    });

    test("Get engineer role in getter", () => {
        expect(engineer.getRole()).toBe(role);
    });

});