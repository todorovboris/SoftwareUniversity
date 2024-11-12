function solve(arr) {
    let spices = arr.shift().split(', ');

    let command = arr.shift();
    while (command !== 'done') {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action === 'AddSpice') {
            let newSpice = tokens[1];
            if (!spices.includes(newSpice)) {
                spices.push(newSpice);
            }
        } else if (action === 'AddManySpices') {
            let index = tokens[1];
            let newSpices = tokens[2].split('|');
            // console.log(newSpices);
            for (let i = newSpices.length - 1; i >= 0; i--) {
                spices.splice(index, 0, newSpices[i]);
            }
        } else if (action === 'SwapSpices') {
            let spice1 = tokens[1];
            let spice2 = tokens[2];

            let indexOfSpice1 = spices.indexOf(spice1);
            let indexOfSpice2 = spices.indexOf(spice2);

            if (indexOfSpice1 >= 0 && indexOfSpice2 >= 0) {
                [spices[indexOfSpice1], spices[indexOfSpice2]] = [spices[indexOfSpice2], spices[indexOfSpice1]];
            }
        } else if (action === 'ThrowAwaySpices') {
            let spice = tokens[1];
            let spicesToRemove = tokens[2];
            let indexOfSpice = spices.indexOf(spice);

            spices.splice(indexOfSpice, spicesToRemove);
        } else if (action === 'Arrange') {
            spices.sort();
        }

        command = arr.shift();
    }

    console.log(spices.join(' '));
}

// solve([
//     'coriander, cloves, paprika, allspice, turmeric, anise, cumin',
//     'AddSpice nutmeg',
//     'ThrowAwaySpices cloves 3',
//     'AddManySpices 3 cayenne|cardamom|mace',
//     // 'Arrange',
//     'done',
// ]);
solve([
    'coriander, cloves, paprika, cumin',
    'AddSpice nutmeg',
    'AddSpice anise',
    'AddSpice turmeric',
    'AddSpice cumin',
    'SwapSpices coriander paprika',
    'ThrowAwaySpices cumin 4',
    'done',
]);
