function lab02(num1, num2, num3){
    let sum = num1 + num2 + num3;

    if (sum % 1 !== 0){
        console.log(`${sum} - Float`);
    } else {
        console.log(`${sum} - Integer`);
    }
}

// lab02(9, 100, 1.1);
lab02(100, 200, 303);