function lab(n, sequence) {
    let resultArr = [1];

    for (let i = 2; i <= n; i++) {
        let sum = 0;
        let lastElms = resultArr.slice(-sequence);

        for (let j = 0; j < lastElms.length; j++) {
            sum += lastElms[j];
        }
        resultArr.push(sum);
    }

    return resultArr;
}

console.log(lab(6, 3));
console.log('---');
console.log(lab(8, 2));
