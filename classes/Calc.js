class Calc {

    constructor() {
        this.defaultValue = 0;
    }

    add(input) {
        if (!input) {
            return this.defaultValue;
        }

        if (this.isSingleNumber(input) === -1) {
            return parseInt(input);
        }

        let list = input.split(/[\n,]/);
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            sum += parseInt(list[i]);
        }

        return sum;
    }

    isSingleNumber(input) {
        return input.indexOf(',') === -1 && input.indexOf('\n') === -1;
    }
}

module.exports = Calc;