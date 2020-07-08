const { promiseAll } = require("./promiseAll");

describe('test promiseAll function',  () => {
    test(`Передаем валидные промисы`,
      () => expect(promiseAll([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)])).resolves.toEqual([1,2,3]));

    test(`Передаем пустой массив, ожидаем реджект со строкой "empty arr"`,
      () => expect(promiseAll([])).rejects.toBe('empty arr'));

    test(`Передаем массив с невалидным promise, ожидаем реджект с переданным аргументом`,
      () => expect(promiseAll([Promise.resolve(1),Promise.reject(2)])).rejects.toBe(2));
});
