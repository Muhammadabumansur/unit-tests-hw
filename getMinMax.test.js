const { getMinMax } = require('./getMinMax');

describe('Test getMinMax function',  () => {
  test(`Test string "1 and 5"`, () => expect(getMinMax("1 and 5")).toEqual({min: 1, max: 5}));

  test(`Test string "1 and 5 and -3"`, () => expect(getMinMax("1 and 5 and -3")).toEqual({min: -3, max: 5}));

  test(`Test string "1 and NaN and -3"`, () => expect(getMinMax("1 and NaN and -3")).toEqual({min: -3, max: 1}));

  test(`Test string "Infinity and NaN and -3"`, () => expect(getMinMax("Infinity and NaN and -3")).toEqual({min: -3, max: Infinity}));

  test(`Test string "only 42"`, () => expect(getMinMax("only 42")).toEqual({min: 42, max: 42}));

  test(`Test string "I don't contain any numbers"`, () => expect(getMinMax("I don't contain any numbers")).toEqual({min: Infinity, max: -Infinity}));

  test(`Test empty string`, () => expect(getMinMax("")).toEqual({min: Infinity, max: -Infinity}));

  test(`Test number`, () => expect(() => getMinMax(5)).toThrow());

  test(`Test undefined`, () => expect(() => getMinMax(undefined)).toThrow());

  test(`Test boolean`, () => expect(() => getMinMax(true)).toThrow());
});
