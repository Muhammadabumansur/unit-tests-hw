const { meanMode } = require('./meanMode');

describe('Test meanMode function',  () => {
  test(`Test array [4]`, () => expect(meanMode([4])).toBe(true));

  test(`Test array [1, 2, 2, 3]`, () => expect(meanMode([1, 2, 2, 3])).toBe(true));

  test(`Test array [-1, -2, 12, 3, 3]`, () => expect(meanMode([-1, -2, 12, 3, 3])).toBe(true));

  test(`Test array [1, 2, 2, 3, 3]`, () => expect(meanMode([1, 2, 2, 3, 3])).toBe(false));

  test(`Test array [1, 2, 2, 3, 5]`, () => expect(meanMode([1, 2, 2, 3, 5])).toBe(false));

  test(`Test array [1, 1, 1, 1, 1]`, () => expect(meanMode([1, 1, 1, 1, 1])).toBe(true));

  test(`Test array [-Infinity, -1, 0, 0, 1, +Infinity]`, () => expect(meanMode([1, 2, 2, 3])).toBe(true));

  test(`Test empty array`, () => expect(meanMode([])).toBe(false));

  test(`Test string array ["4", "5", "5", "6"]`, () => expect(meanMode(["4", "5", "5", "6"])).toBe(false));

  test(`Test string`, () => expect(() => meanMode("string")).toThrow());

  test(`Test number`, () => expect(() => meanMode(5)).toThrow());

  test(`Test undefined`, () => expect(() => meanMode(undefined)).toThrow());

  test(`Test boolean`, () => expect(() => meanMode(true)).toThrow());
});
