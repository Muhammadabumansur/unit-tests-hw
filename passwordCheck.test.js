const { passwordCheck } = require('./passwordCheck');

describe('Test passwordCheck function',  () => {
  test(`Тестируем строку минимально удовлетворяющую требованиям`, () => expect(passwordCheck("1aB!qwerty")).toEqual(true));

  test(`Тестируем строку из 9 символов`, () => expect(passwordCheck("1aB!qwert")).toEqual(false));

  test(`Тестируем строку без цифр`, () => expect(passwordCheck("abC!qwerty")).toEqual(false));

  test(`Тестируем строку без заглавных букв`, () => expect(passwordCheck("1bc!qwerty")).toEqual(false));

  test(`Тестируем строку без спецсимволов`, () => expect(passwordCheck("1bcdQwerty")).toEqual(false));

  test(`Тестируем строку c русской буквой`, () => expect(passwordCheck("1aЁ!qwerty")).toEqual(false));

  test(`Передаем в функцию число, ожидаем false`, () => expect(passwordCheck(5)).toEqual(false));

  test(`Передаем в функцию undefined значение, ожидаем ошибку`, () => expect(() => passwordCheck(undefined)).toThrow());

  test(`Передаем в функцию булево значение, ожидаем false`, () => expect(passwordCheck(true)).toEqual(false));
});
