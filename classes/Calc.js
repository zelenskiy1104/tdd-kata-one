class Calc {

    constructor() {
        this.defaultValue = 0;
    }

    add(input) {
        if (!input) {
            return this.defaultValue;
        }

        return 1;
    }
}

module.exports = Calc;