
const Manager = require("../lib/Manager");
const manager = new Manager("Drew", "123456", "afebre1027@gmail.com",  '786-786-3050');

test("Manager constructor values", () => {
  expect(manager.name).toBe("Drew");
  expect(manager.id).toBe("123456");
  expect(manager.email).toBe("afebre1027@gmail.com");
  expect(manager.officeNumber).toBe("786-786-3050");
});

test("test for getName() method", () => {
  expect(manager.getName()).toBe("Drew");
});

test("test for getEmail() method", () => {
  expect(manager.getEmail()).toBe("afebre1027@gmail.com");
});

test("test for getId() method", () => {
  expect(manager.getId()).toBe("123456");
});

test("test for getOfficeNumber() method", () => {
  expect(manager.getOfficeNumber()).toBe("786-786-3050");
});

test("test for getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
