function lab(arr) {
    let result = [];

    arr.forEach((el, i) => {
        if (i % 2 === 0) {
            result.push(el);
        }
    });

    console.log(result.join(' '));
}

lab(['20', '30', '40', '50', '60']);
console.log('---');
lab(['5', '10']);
