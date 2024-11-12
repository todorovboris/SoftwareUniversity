function lab(n, m) {
    let result = 0;

    // 1 - parse to Numbers
    let num1 = Number(n);
    let num2 = Number(m);

    // 2 - обхождаме от едното до другото число и добавяме към сумата всяко едно от тях
    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;
}

console.log(lab('1', '5'));
console.log('----');
console.log(lab('-8', '20'));
