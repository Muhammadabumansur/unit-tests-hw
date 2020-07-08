const { sum } = require('./sum');

describe('Test meanMode function',  () => {
  test(`Вызов без аргументов должен вернуть 0`, () => expect(sum()).toBe(0));

  test(`Вызов sum(5) должен вернуть функцию`, () => expect(sum(5)).toBeInstanceOf(Function));

  test(`Вызов sum(5)() должен вернуть 5`, () => expect(sum(5)()).toBe(5));

  test(`Вызов sum(5)(6)() должен вернуть 11`, () => expect(sum(5)(6)()).toBe(11));

  test(`Вызов со строками в аргументах должен вернуть NaN`, () => expect(sum("Hello ")("world!")()).toBeNaN());

  test(`Последовательный вызов без аргументов приводит к ошибке`, () => expect(() => sum()()).toThrow());
});
