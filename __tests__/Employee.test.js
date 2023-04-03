const { after, afterEach } = require("node:test");
const Employee = require("../lib/employee");

describe('Employee tests', () => {
    let employee;
    const employeeId = 1;
    const name = "Lavanya Virushan";
    const email = "lavanya@gmail.com";
    const role = "Employee"

    beforeEach(() => {
        employee = new Employee(employeeId, name, email);
    });

    test("Instantiate Employee instance", () => {
        expect(typeof(employee)).toBe("object");
    });
    
    test("Set employee id in constructor", () => {
        expect(employee.id).toBe(employeeId);
    });

    test("Set employee name in constructor", () => {
        expect(employee.name).toBe(name);
    });

    test("Set employee email in constructor", () => {
        expect(employee.email).toBe(email);
    });

    test("Get name in constructor", () => {
        expect(employee.getName()).toBe(name);
    });

    test("Get employee id in getter", () => {
        expect(employee.getId()).toBe(employeeId);
    });

    test("Get email in getter", () => {
        expect(employee.getEmail()).toBe(email);
    });

    test("get employee role in getter", () => {
        expect(employee.getRole()).toBe(role);
    });
});    