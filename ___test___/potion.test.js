const { test, expect } = require("@jest/globals");
const { default: expectationResultFactory } = require("jest-jasmine2/build/expectationResultFactory");

const Potion = require('../lib/potion.js');

test('create a health potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});


