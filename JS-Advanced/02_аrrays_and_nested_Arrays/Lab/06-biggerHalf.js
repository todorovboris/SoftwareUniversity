function lab(arr) {
    arr.sort((a, b) => a - b);
    let result = [];

    let lastIndex = arr.length - 1;
    let middleIndex = Math.floor(arr.length / 2);

    for (let i = middleIndex; i <= lastIndex; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(lab([4, 7, 2, 5]));
console.log('-----');
console.log(lab([3, 19, 14, 7, 2, 19, 6]));
