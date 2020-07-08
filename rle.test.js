const { rle } = require('./rle');

describe('Test rle function',  () => {
  test(`Тестируем строку без повторений "abc"`, () => expect(rle("abc")).toEqual(`abc`));

  test(`Тестируем строку с повторениями в разных регистрах "abBBBc"`, () => expect(rle("abBBBc")).toEqual(`abB3c`));

  test(`Тестируем строку с повторениями цифр "abBBBc22"`, () => expect(rle("abBBBc22")).toEqual(`abB3c22`));

  test(`Вызов функции с аргументом числом вызовет ошибку`, () => expect(() => rle(5)).toThrow());

  test(`Вызов функции с аргументом undefined вызовет ошибку`, () => expect(() => rle(undefined)).toThrow());

  test(`Вызов функции с аргументом булевого типа вызовет ошибку`, () => expect(() => rle(true)).toThrow());
});
