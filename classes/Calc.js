class Calc {

    constructor() {
        this.defaultValue = 0;
    }

    add(input) {
        if (!input) {
            return this.defaultValue;
        }

        if (input.indexOf(',') === -1) {
            return parseInt(input);
        }

        let list = input.split(',');
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            sum += parseInt(list[i]);
        }

        return sum;
    }
}

module.exports = Calc;