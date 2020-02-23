const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "Jr Dev", "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "Jr Dev", "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const school = "UCLA";
  const e = new Intern("Foo", 1,"Jr Dev", "test@test.com", school);
  expect(e.getSchool()).toBe(school);
});