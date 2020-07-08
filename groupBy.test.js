const { groupBy } = require("./groupBy");

describe('test groupBy function',  () => {
    test(`Проверим функцию, которая возвращает аргумент`,
      () => expect(groupBy(x => x, { a: 1, b: 1, c: 3})).toEqual({ '1': [1, 1], '3': [3] }));

    test(`Проверим функцию, которая возводит аргумент в степень заданную аргументом`,
      () => expect(groupBy(x => x ** x, { a: 1, b: 2, c: 3})).toEqual({ '1': [1], '4': [2], '27': [3] }));
});
