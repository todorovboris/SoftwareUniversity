function exe(numx1, numy1, numx2, numy2) {
    // let isValid = false;

    function result(x1, y1, x2, y2) {
        let formula = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        if (formula % 1 === 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    result(numx1, numy1, 0, 0);
    result(numx2, numy2, 0, 0);
    result(numx1, numy1, numx2, numy2);

    // console.log(formula);
    // console.log(x1 % 1); // => check is integer
}

exe(2, 1, 1, 1);
