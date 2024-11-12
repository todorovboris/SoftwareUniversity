function exe(num1, num2) {
    let gcd = 0;
    let smallest = 0;

    if (num1 > num2) {
        smallest = num2;
    } else {
        smallest = num1;
    }

    for (let i = 1; i <= smallest; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }

    console.log(gcd);
}

exe(2154, 458);
