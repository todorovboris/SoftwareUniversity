function lab(month, year) {
    let myDate = new Date(year, month, 0);

    return myDate.getDate();
}

console.log(lab(1, 2012));
console.log('----');
console.log(lab(2, 2021));
