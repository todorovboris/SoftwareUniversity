function lab(arr) {
    let sum = 0;
    let sumInv = 0;

    for (const el of arr) {
        sum += el;
        sumInv += 1 / el;
    }

    console.log(sum);
    console.log(sumInv);

    let textResult = arr.join('');
    console.log(textResult);
}

lab([1, 2, 3]);
console.log('----');
lab([2, 4, 8, 16]);
