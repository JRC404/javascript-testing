const index = require("../index");

// test or it can be used

describe("testing all increase functions are doing what they are meant to", () => {
  test("should see pace increase by 1 after function call", () => {
    expect(index.abrar.pace).toBe(97); // 97
    index.abrar.increasePace(); // called the function... 97 +1
    // changes Abrar's pace from 97 to 98
    expect(index.abrar.pace).toBe(98); // now 98
    index.abrar.pace = 97;
  });
}); // group message

describe("testing all decrease functions are doing what they are meant to", () => {
  test("should see pace decrease by 1 after function call", () => {
    index.abrar.decreasePace();
    expect(index.abrar.pace).toBe(96);
  });
  test("should see passing decrease by 1 after function call", () => {
    index.abrar.descreasePassing();
    expect(index.abrar.passing).toBe(3);
  });
});
