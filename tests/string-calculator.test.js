"use strict";
let assert = require('chai').assert;
let Calc = require('../classes/Calc');

describe("string calculator", function() {
    it("should return 0 if input is empty", function() {
        let calc = new Calc();
        
        let sum = calc.add('');

        assert.equal(sum, 0);
    });
});