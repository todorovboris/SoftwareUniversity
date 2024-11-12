function lab(arr) {
    let countEquals = 0;

    for (let row = 0; row < arr.length - 1; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            let firstEl = arr[row][col];
            let comparedInRow = arr[row][col + 1];
            let comparedInCol = arr[row + 1][col];

            if (firstEl === comparedInRow) {
                countEquals++;
            }

            if (firstEl === comparedInCol) {
                countEquals++;
            }
        }
    }

    // check only the last row
    let lastRow = arr[arr.length - 1];
    for (let col = 0; col < lastRow.length; col++) {
        if (lastRow[col] === lastRow[col + 1]) {
            countEquals++;
        }
    }

    return countEquals;
}

console.log(
    lab([
        ['2', '2', '5', '7', '4'],
        ['4', '0', '5', '3', '4'],
        ['2', '5', '5', '4', '2'],
    ])
);
// console.log(
//     lab([
//         ['2', '3', '4', '7', '0'],
//         ['4', '0', '5', '3', '4'],
//         ['2', '3', '5', '4', '2'],
//         ['9', '8', '7', '5', '4'],
//     ])
// );
// console.log('----');
// console.log(
//     lab([
//         ['test', 'yes', 'yo', 'ho'],
//         ['well', 'done', 'yo', '6'],
//         ['not', 'done', 'yet', '5'],
//     ])
// );
// console.log('----');
