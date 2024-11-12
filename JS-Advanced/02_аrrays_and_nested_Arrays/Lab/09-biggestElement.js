function lab(arr) {
    let theBiggest = Number.MIN_SAFE_INTEGER;

    for (const elms of arr) {
        for (const num of elms) {
            if (num > theBiggest) {
                theBiggest = num;
            }
        }
    }

    return theBiggest;
}

console.log(
    lab([
        [20, 50, 10],
        [8, 33, 145],
    ])
);
