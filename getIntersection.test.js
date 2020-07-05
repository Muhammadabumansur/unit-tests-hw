const { getIntersection } = require("./getIntersection");

describe('test getIntersection function',  () => {
    test(`test arrays [3, 4, 5, 9, 8], [9, 8, 7, 3]`,
      () => expect(getIntersection([3, 4, 5, 9, 8], [9, 8, 7, 3])).toEqual([3, 8, 9]));

    test(`test arrays [3, 4, 5], [9, 8, 7]`,
      () => expect(getIntersection([3, 4, 5], [9, 8, 7])).toEqual([]));

    test(`test arrays [3, 4, 5, 9, 8, 8], [9, 8, 7, 3, 8]`,
      () => expect(getIntersection([3, 4, 5, 9, 8, 8], [9, 8, 7, 3, 8])).toEqual([3, 8, 8, 9]));
});
