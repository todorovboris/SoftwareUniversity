function exe(matrix) {
    let firstSum = 0;
    matrix[0].forEach((el) => (firstSum += el));
    isMagic = true;

    // checking in the rows
    for (const row of matrix) {
        let sumRow = 0;
        row.forEach((el) => (sumRow += el));

        if (sumRow !== firstSum) {
            isMagic = false;
        }
    }

    //checking in the cols
    for (let i = 0; i < matrix[0].length; i++) {
        let sumCols = 0;
        for (let j = 0; j < matrix.length; j++) {
            sumCols += matrix[j][i];
        }

        if (sumCols !== firstSum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}

exe([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);
