function calculator() {
    return {
        init(selector1, selector2, resultSelector) {
            this.num1 = document.querySelector(selector1);
            this.num2 = document.querySelector(selector2);
            this.result = document.querySelector(resultSelector);
        },

        add() {
            const num1 = Number(this.num1.value);
            const num2 = Number(this.num2.value);
            const sum = num1 + num2;

            this.result.value = sum;
        },

        subtract() {
            const num1 = Number(this.num1.value);
            const num2 = Number(this.num2.value);
            const diff = num1 - num2;

            this.result.value = diff;
        },
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
