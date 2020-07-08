const { meanMode } = require('./meanMode');

describe('Test meanMode function',  () => {
  test(`Передаем массив из одного числа`, () => expect(meanMode([4])).toBe(true));

  test(`Передаем валидный массив`, () => expect(meanMode([1, 2, 2, 3])).toBe(true));

  test(`Передаем валидный массив с присутствием отрицательных чисел`, () => expect(meanMode([-1, -2, 12, 3, 3])).toBe(true));

  test(`Передаем массив где несколько чисел встречаются одинаковое количество раз и чаще всех остальных`, () => expect(meanMode([1, 2, 2, 3, 3])).toBe(false));

  test(`Передаем невалидный массив`, () => expect(meanMode([1, 2, 2, 3, 5])).toBe(false));

  test(`Передаем валидный массив в котором одно число повторяется много раз`, () => expect(meanMode([1, 1, 1, 1, 1])).toBe(true));

  test(`Передаем валидный массив в котором встречаются значения бесконечности`, () => expect(meanMode([1, 2, 2, 3])).toBe(true));

  test(`Передаем пустой массив, ожидаем false`, () => expect(meanMode([])).toBe(false));

  test(`Передаем валидный массив но числа в формате строк, ожидаем false`, () => expect(meanMode(["4", "5", "5", "6"])).toBe(false));

  test(`Передаем строку вместо массива, ожидаем ошибку`, () => expect(() => meanMode("string")).toThrow());

  test(`Передаем число вместо массива, ожидаем ошибку`, () => expect(() => meanMode(5)).toThrow());

  test(`Передаем undefined вместо массива, ожидаем ошибку`, () => expect(() => meanMode(undefined)).toThrow());

  test(`Передаем булево значение вместо массива, ожидаем ошибку`, () => expect(() => meanMode(true)).toThrow());
});
