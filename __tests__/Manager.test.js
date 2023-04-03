const Manager = require("../lib/manager");

describe('Manager tests', () => {
    let manager;
    const employeeId = 1;
    const name = "Lavanya Virushan";
    const email = "lavanya@gmail.com";
    const officeNumber = 2;
    const role = "Manager"

    beforeEach(() => {
        manager = new Manager(employeeId, name, email, officeNumber);
    });

    test("Set office number in constructor", () => {
        expect(manager.officeNumber).toBe(officeNumber);
    });

    test("Get engineer role from getter", () => {
        expect(manager.getRole()).toBe(role);
    });

    test("Get office number from time", () => {
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
});