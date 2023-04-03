const Intern = require("../lib/Intern");

describe('Intern tests', () => {
    let intern;
    const employeeId = 1;
    const name = "Lavanya Virushan";
    const email = "lavanya@gmail.com";
    const school = "UFT"
    const role = "Intern"

    beforeEach(() => {
        intern = new Intern(employeeId, name, email, school);
    });

    test("Set school in constructor", () => {
        expect(intern.school).toBe(school);
    });

    test("Get engineer role from getter", () => {
        expect(intern.getRole()).toBe(role);
    });

    test("Get school from getter", () => {
        expect(intern.getSchool()).toBe(school);
    });
});