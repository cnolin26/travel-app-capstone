const sum = require('./getCountry.test.js');

test('user submits Toronto and gets Canada', () => {
  expect(getCountry("Toronto")).toBe("Canada");
});