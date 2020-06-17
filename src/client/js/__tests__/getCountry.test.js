import {getCountry} from '../getCountry.js'
const expected = ['name: Canada'];
test('user submits Canada and gets array of info on Canada', () => {
  expect(getCountry("https://restcountries.eu/rest/v2/name/Canada")).toEqual(expect.arrayContaining([{"name": "Canada"}]));
});
