function exe(year, month, day) {
    let myDate = new Date(year, month - 1, day);

    myDate.setDate(myDate.getDate() - 1);

    // let newDay = myDate.getDate();
    // let newYear = myDate.getFullYear();
    // let newMonth = myDate.getMonth();

    // let newDate = `${newYear}-${newMonth}-${newDay}`;

    return `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;
}

console.log(exe(2016, 4, 1));
