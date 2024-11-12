function lab(arr) {
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());

    return firstEl + lastEl;
}

console.log(lab(['20', '30', '40']));
console.log('----');
console.log(lab(['5', '10']));
