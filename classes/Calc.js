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

        if (this.isCustomDelimiterString(input)) {
            let parts = input.split('\n');
            let delimiter = parts[0].substr(2);
            let numbers = parts[1];

            let list = numbers.split(delimiter);

            return this.getSumOfList(list);

        }

        let list = input.split(/[\n,]/);

        return this.getSumOfList(list);
    }

    isSingleNumber(input) {
        return input.indexOf(',') === -1 && input.indexOf('\n') === -1;
    }

    isCustomDelimiterString(input) {
        return input.indexOf('//') > -1 && input.indexOf('\n') > -1;
    }

    getSumOfList(list) {
        return list.reduce(function (a, b) {
            return parseInt(a) + parseInt(b);
        });
    }
}

module.exports = Calc;