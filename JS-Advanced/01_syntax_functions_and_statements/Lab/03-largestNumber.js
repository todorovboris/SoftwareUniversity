function lab(num1, num2, num3) {
    let numArr = [num1, num2, num3];
    let largestNum = numArr.sort((a, b) => a - b).pop();

    console.log(`The largest number is ${largestNum}.`);
}

lab(5, -3, 16);
console.log('--------------');
lab(-3, -5, -22.5);
