"use strict";
let assert = require('chai').assert;
let Calc = require('../classes/Calc');

function createCalc() {
    return new Calc();
}

describe("string calculator", function() {
    it("should return default value if input is empty", function() {
        let calc = createCalc();
        
        let sum = calc.add('');

        assert.equal(sum, 0);
    });

    it("should return 1 if input is 1", function() {
        let calc = createCalc();

        let sum = calc.add('1');

        assert.equal(sum, 1);
    });

    it("should return single number if input is single number", function() {
        let calc = createCalc();

        let sum = calc.add('2');

        assert.equal(sum, 2);
    });

    it("should return sum of two comma separated numbers", function() {
        let calc = createCalc();

        let sum = calc.add('1,4');

        assert.equal(sum, 5);
    });

    it("should return sum of any number comma separated numbers", function() {
        let calc = createCalc();

        let sum = calc.add('11,9,21,9');

        assert.equal(sum, 50);
    });

    it("should return sum of any number new-line separated numbers", function() {
        let calc = createCalc();

        let sum = calc.add('11\n9\n21\n9');

        assert.equal(sum, 50);
    });
});