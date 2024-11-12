function lab(num) {
    let size = 0;

    if (typeof num === 'undefined') {
        size = 5;
    } else {
        size = num;
    }

    let line = '';
    for (let i = 1; i <= size; i++) {
        line += '* ';
    }

    for (let i = 1; i <= size; i++) {
        console.log(line.trimEnd());
    }
}

lab(1);
console.log('---');
lab(2);
console.log('---');
lab(5);
console.log('---');
lab(7);
console.log('---');
lab();
