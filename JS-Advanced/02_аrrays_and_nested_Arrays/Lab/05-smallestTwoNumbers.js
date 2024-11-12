function lab(arr) {
    arr.sort((a, b) => a - b);
    // console.log(arr);

    let result = arr.slice(0, 2);
    console.log(result.join(' '));
}

lab([30, 15, 50, 5]);
console.log('---');
lab([3, 0, 10, 4, 7, 3]);
