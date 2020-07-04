const { passwordCheck } = require('./passwordCheck');

describe('Test passwordCheck function',  () => {
  test(`Test string "1aB!qwerty"`, () => expect(passwordCheck("1aB!qwerty")).toEqual(true));

  test(`Test string "1aB!qwert"`, () => expect(passwordCheck("1aB!qwert")).toEqual(false));

  test(`Test string "abC!qwerty"`, () => expect(passwordCheck("abC!qwerty")).toEqual(false));

  test(`Test string "1bc!qwerty"`, () => expect(passwordCheck("1bc!qwerty")).toEqual(false));

  test(`Test string "1bcdqwerty"`, () => expect(passwordCheck("1bcdqwerty")).toEqual(false));

  test(`Test string "1bc!qwerty"`, () => expect(passwordCheck("1bc!qwerty")).toEqual(false));

  test(`Test string "1aЁ!qwerty"`, () => expect(passwordCheck("1aЁ!qwerty")).toEqual(false));

  test(`Test number`, () => expect(passwordCheck(5)).toEqual(false));

  test(`Test undefined`, () => expect(() => passwordCheck(undefined)).toThrow());

  test(`Test boolean`, () => expect(passwordCheck(true)).toEqual(false));
});
