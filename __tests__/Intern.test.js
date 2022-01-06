const Intern = require("../lib/Intern");
const intern = new Intern(
  "Drew",
  "123456",
  "afebre1027@gmail.com",
  "UNCC boot camp"
);

test("Employees constructor values", () => {
  expect(intern.name).toBe("Drew");
  expect(intern.id).toBe("123456");
  expect(intern.email).toBe("afebre1027@gmail.com");
});

test("test for getName() method", () => {
  expect(intern.getName()).toBe("Drew");
});

test("test for getEmail() method", () => {
  expect(intern.getEmail()).toBe("afebre1027@gmail.com");
});

test("test for getId() method", () => {
  expect(intern.getId()).toBe("123456");
});

test("test for getSchool() method", () => {
  expect(intern.getSchool()).toBe("UNCC boot camp");
});

test("test for getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
