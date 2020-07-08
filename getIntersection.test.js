const { getIntersection } = require("./getIntersection");

describe('test getIntersection function',  () => {
    test(`Проверим массивы с пересечениями`,
      () => expect(getIntersection([3, 4, 5, 9, 8], [9, 8, 7, 3])).toEqual([3, 8, 9]));

    test(`Проверим массивы без пересечений, ожидаем пустой массив`,
      () => expect(getIntersection([3, 4, 5], [9, 8, 7])).toEqual([]));

    test(`Проверим массивы, в которых число пересекается больше одного раза`,
      () => expect(getIntersection([3, 4, 5, 9, 8, 8], [9, 8, 7, 3, 8])).toEqual([3, 8, 8, 9]));
});
