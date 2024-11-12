function lab(input) {
    if (typeof input === 'number') {
        let area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

lab(5);
console.log('----');
lab('name');
