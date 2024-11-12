function solve(numsArr, method) {
    let arrSorted = numsArr.toSorted((a, b) => a - b);

    if (method === 'desc') {
        arrSorted.reverse();
    }

    return arrSorted;
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));
