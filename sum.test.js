const { sum } = require('./sum');

describe('Test meanMode function',  () => {
  test(`Test call without arguments`, () => expect(sum()).toBe(0));

  test(`Test sum(5)`, () => expect(sum(5)).toBeInstanceOf(Function));

  test(`Test sum(5)()`, () => expect(sum(5)()).toBe(5));

  test(`Test sum(5)(6)()`, () => expect(sum(5)(6)()).toBe(11));

  test(`Test sum("Hello ")("world!")()`, () => expect(sum("Hello ")("world!")()).toBeNaN());

  test(`Test sum()()`, () => expect(() => sum()()).toThrow());
});
