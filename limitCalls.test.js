const { limitCalls } = require("./limitCalls");

const testFn = limitCalls(() => 5, 3);

describe('test limitCalls function',  () => {
    test(`test testFn 1st time`,
      () => expect(testFn()).toEqual(5));
    test(`test testFn 2nd time`,
      () => expect(testFn()).toEqual(5));
    test(`test testFn 3rd time`,
      () => expect(testFn()).toEqual(5));
    test(`test testFn 4th time`,
      () => expect(testFn()).toBeUndefined());

});
