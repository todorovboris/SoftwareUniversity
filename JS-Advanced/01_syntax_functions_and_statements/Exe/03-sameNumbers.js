function exe(num) {
    let numText = '' + num;
    let sum = 0;
    let firstDigit = numText.split('').shift();

    let isSame = true;

    for (const num of numText) {
        sum += Number(num);

        if (num !== firstDigit) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

exe(1234);
