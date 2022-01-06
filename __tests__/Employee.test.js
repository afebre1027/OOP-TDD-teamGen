const { test } = require("@jest/globals");
const Employee = require("../lib/Employee");
const employee = new Employee("Drew", "123456", "afebre1027@gmail.com");

test("Employees constructor values", () => {
  expect(employee.name).toBe("Drew");
  expect(employee.id).toBe("123456");
  expect(employee.email).toBe("afebre1027@gmail.com");
});

test("test for getName() method", () => {
  expect(employee.name).toBe("Drew");
});

test("test for getEmail() method", () => {
  expect(employee.email).toBe("afebre1027@gmail.com");
});

test("test for getId() method", () => {
  expect(employee.id).toBe("123456");
});

test("test for getRole() method", () => {
  expect(employee.role).toBe(employee);
});
