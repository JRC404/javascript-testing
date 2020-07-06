const app = require("../app"); // no need for the .js at the end
// 'app' is global... '../app' is local

// with testing, assertions need to be made

// npm i jest --save-dev
// change test script to "jest"
// npm test

test("should show that number 1 and number 2 equals 8 when 5 and 3 are passed", () => {
  // comment here
  expect(app.add(5, 3)).toBe(8);
});

test("myArray should contain Dean as a value", () => {
  //   expect(app.myArray).not.toContain("Dea");
  expect(app.myArray).toContain("Dean");
});

test("userInput should equal 1234", () => {
  app.userInput = 1234;
  expect(app.userInput).toBe(1234);
  app.userInput;
});

test("should reduce the userBalance by the requested amount", () => {
  expect(app.withdrawFunction(10)).toBe(990);
});

test("booleanValue should return true", () => {
  expect(app.booleanValue).toBeTruthy();
  app.booleanValue = false;
  expect(app.booleanValue).toBeFalsy();
});

// tested mimicking userInput with 2 tests - userInput should equal 1234
// withdraw 10 pounds worked

// describe("all of my tests in this poorly worded test", () => {});
