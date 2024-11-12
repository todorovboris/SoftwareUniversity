function lab(arr) {
    arr.sort((a, b) => a - b);
    let result = [];

    let lastIndex = arr.length - 1;
    let middleIndex = Math.floor(arr.length / 2);

    let result2 = arr.splice(middleIndex, lastIndex);
    return result2;
}

console.log(lab([4, 7, 2, 5]));
console.log('-----');
console.log(lab([3, 19, 14, 7, 2, 19, 6]));
