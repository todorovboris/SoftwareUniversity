function houseParty(arr) {
    let guestList = [];

    for (let action of arr) {
        let command = action.split(' ');
        const name = command[0];

        if (!command.includes('not')) {
            if (!guestList.includes(name)) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            let indexOfPerson = guestList.indexOf(name);

            if (indexOfPerson !== -1) {
                guestList.splice(indexOfPerson, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guestList.join('\n'));
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!',
]);
// houseParty([
//     'Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!',
//     'Jerry is going!',
// ]);
