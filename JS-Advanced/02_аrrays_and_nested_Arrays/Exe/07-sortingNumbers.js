function exe(arr) {
    let result = [];

    arr = arr.sort((a, b) => a - b);

    while (arr.length > 0) {
        let firstEl = arr.shift();
        let lastEl = arr.pop();

        result.push(firstEl);
        result.push(lastEl);
    }

    return result;
}

console.log(exe([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
