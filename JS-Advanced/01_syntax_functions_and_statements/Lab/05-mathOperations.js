function lab(num1, num2, oper) {
    let result = 0;

    if (oper === '+') {
        result = num1 + num2;
    } else if (oper === '-') {
        result = num1 - num2;
    } else if (oper === '*') {
        result = num1 * num2;
    } else if (oper === '/') {
        result = num1 / num2;
    } else if (oper === '%') {
        result = num1 % num2;
    } else if (oper === '**') {
        result = num1 ** num2;
    }

    console.log(result);
}

lab(5, 6, '+');
console.log('----');
lab(3, 5.5, '*');
