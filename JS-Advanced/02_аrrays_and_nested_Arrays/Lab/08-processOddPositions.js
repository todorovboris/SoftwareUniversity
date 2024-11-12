function lab(arr) {
    let result = [];
    let index = 0;

    for (const element of arr) {
        if (index % 2 !== 0) {
            result.unshift(element * 2);
        }
        index++;
    }

    return result;
}

console.log(lab([10, 15, 20, 25]));
console.log('-----');
console.log(lab([3, 0, 10, 4, 7, 3]));
