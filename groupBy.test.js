const { groupBy } = require("./groupBy");

describe('test groupBy function',  () => {
    test(`test function x => x and object { a: 1, b: 1, c: 3}`,
      () => expect(groupBy(x => x, { a: 1, b: 1, c: 3})).toEqual({ '1': [1, 1], '3': [3] }));

    test(`test function x => x ** x and object { a: 1, b: 2, c: 3}`,
      () => expect(groupBy(x => x ** x, { a: 1, b: 2, c: 3})).toEqual({ '1': [1], '4': [2], '27': [3] }));
});
