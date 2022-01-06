const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "Drew",
  "123456",
  "afebre1027@gmail.com",
  "afebre1027"
);

test("Employees constructor values", () => {
  expect(engineer.name).toBe("Drew");
  expect(engineer.id).toBe("123456");
  expect(engineer.email).toBe("afebre1027@gmail.com");
});

test("test for getName() method", () => {
  expect(engineer.getName()).toBe("Drew");
});

test("test for getEmail() method", () => {
  expect(engineer.getEmail()).toBe("afebre1027@gmail.com");
});

test("test for getId() method", () => {
  expect(engineer.getId()).toBe("123456");
});

test("test for getGithub() method", () => {
  expect(engineer.getGithub()).toBe("afebre1027");
});

test("test for getRole() method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
