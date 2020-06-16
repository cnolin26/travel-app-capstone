const sum = require('./getCountry');

test('user submits London and gets United Kingdom', () => {
  expect(getCountry("London")).toBe("United Kingdom of Great Britain and Northern Ireland");
});