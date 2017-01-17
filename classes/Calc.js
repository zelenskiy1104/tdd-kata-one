class Calc {

    constructor() {
        this.defaultValue = 0;
    }

    add(input) {
        if (!input) {
            return this.defaultValue;
        }

        return parseInt(input);
    }
}

module.exports = Calc;