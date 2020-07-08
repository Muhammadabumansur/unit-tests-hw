const { limitCalls } = require("./limitCalls");

const testFn = limitCalls(() => 5, 3);

describe('test limitCalls function',  () => {
    test(`Вызываем функцию первый раз, ожидаем вывод 5`,
      () => expect(testFn()).toEqual(5));
    test(`Вызываем функцию второй раз, ожидаем вывод 5`,
      () => expect(testFn()).toEqual(5));
    test(`Вызываем функцию третий раз, ожидаем вывод 5`,
      () => expect(testFn()).toEqual(5));
    test(`Вызываем функцию четвертый раз, ожидаем вывод undefined`,
      () => expect(testFn()).toBeUndefined());
});
