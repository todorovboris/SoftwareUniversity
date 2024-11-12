function lab(arr) {
    let result = [];

    for (const el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    console.log(result.join('\n'));
}

lab([7, -2, 8, 9]);
console.log('----');
lab([3, -2, 0, -1]);
