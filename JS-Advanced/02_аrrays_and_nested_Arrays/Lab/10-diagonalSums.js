function lab(arr) {
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    let firstDiagonalIndex = 0;
    let secondDiagonalIndex = arr.length - 1;

    for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
        sumFirstDiagonal += arr[rowIndex][firstDiagonalIndex++];
        sumSecondDiagonal += arr[rowIndex][secondDiagonalIndex--];
    }

    console.log(`${sumFirstDiagonal} ${sumSecondDiagonal}`);
}

lab([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
]);
