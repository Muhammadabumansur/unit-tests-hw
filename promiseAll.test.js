const { promiseAll } = require("./promiseAll");

describe('test promiseAll function',  () => {
    test(`test [1, 2, 3]`,
      () => expect(promiseAll([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)])).resolves.toEqual([1,2,3]));

    test(`test empty array`,
      () => expect(promiseAll([])).rejects.toBe('empty arr'));
});
