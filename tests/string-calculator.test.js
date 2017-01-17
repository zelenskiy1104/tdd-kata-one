"use strict";
let assert = require('chai').assert;
let Calc = require('../classes/Calc');

function createCalc() {
    return new Calc();
}

describe("string calculator", function() {
    it("should return 0 if input is empty", function() {
        let calc = createCalc();
        
        let sum = calc.add('');

        assert.equal(sum, 0);
    });

    it("should return 1 if input is 1", function() {
        let calc = createCalc();

        let sum = calc.add(1);

        assert.equal(sum, 1);
    });
});