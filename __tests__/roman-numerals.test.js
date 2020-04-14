import { toRomanNumeral } from './../src/roman-numerals.js';

describe('toRomanNumeral' , () => {

test('should correctly call toRomanNumeral function and take in a number', () => {
  var romanNum = toRomanNumeral(2);
  expect(romanNum).toEqual(2);
});

test('should take in a number between 0 and 3999', () => {
  var romanNum = toRomanNumeral(400);
  expect(romanNum).toEqual(400);
});

test('should return false for numbers that are not between 0 and 3999', () => {
  var romanNum = toRomanNumeral(4000);
  expect(romanNum).toEqual(false);
});


});