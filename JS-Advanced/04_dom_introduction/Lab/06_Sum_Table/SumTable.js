function sumTable() {
    let resultEl = document.getElementsByTagName('td')[7];
    let values = document.getElementsByTagName('td');

    let sum = 0;
    for (let i = 0; i < values.length - 1; i++) {
        if (i % 2 !== 0) {
            sum += Number(values[i].textContent);
        }
    }

    resultEl.textContent = sum;
}
