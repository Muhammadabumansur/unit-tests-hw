const { getMinMax } = require('./getMinMax');

describe('Test getMinMax function',  () => {
  test(`Передаем строку в которой 2 числа по порядку`, () => expect(getMinMax("1 and 5")).toEqual({min: 1, max: 5}));

  test(`Передаем строку в которой 3 числа не по порядку`, () => expect(getMinMax("1 and 5 and -3")).toEqual({min: -3, max: 5}));

  test(`Передаем строку в которой есть NaN`, () => expect(getMinMax("1 and NaN and -3")).toEqual({min: -3, max: 1}));

  test(`Передаем строку в которой есть NaN и Infinity`, () => expect(getMinMax("Infinity and NaN and -3")).toEqual({min: -3, max: Infinity}));

  test(`Передаем строку в которой есть только одно число`, () => expect(getMinMax("only 42")).toEqual({min: 42, max: 42}));

  test(`Передаем строку без чисел`, () => expect(getMinMax("I don't contain any numbers")).toEqual({min: Infinity, max: -Infinity}));

  test(`Передаем пустую строку`, () => expect(getMinMax("")).toEqual({min: Infinity, max: -Infinity}));

  test(`Вызов с числовым аргументом должен привести к ошибке`, () => expect(() => getMinMax(5)).toThrow());

  test(`Вызов с аргументом undefined должен привести к ошибке`, () => expect(() => getMinMax(undefined)).toThrow());

  test(`Вызов с булевым аргументом должен привести к ошибке`, () => expect(() => getMinMax(true)).toThrow());
});
