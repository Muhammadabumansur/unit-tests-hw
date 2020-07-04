const { rle } = require('./rle');

describe('Test rle function',  () => {
  test(`Test string "abc"`, () => expect(rle("abc")).toEqual(`abc`));

  test(`Test string "abBBBc"`, () => expect(rle("abBBBc")).toEqual(`abB3c`));

  test(`Test string "abBBBc22"`, () => expect(rle("abBBBc22")).toEqual(`abB3c22`));

  test(`Test number`, () => expect(() => rle(5)).toThrow());

  test(`Test undefined`, () => expect(() => rle(undefined)).toThrow());

  test(`Test boolean`, () => expect(() => rle(true)).toThrow());
});
