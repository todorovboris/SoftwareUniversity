function problem02(arr) {
    let coffees = arr.shift().split(' ');
    let countCommands = arr.shift();

    for (let actions of arr) {
        let command = actions.split(' ');
        // console.log(command);

        if (command[0].includes('Include')) {
            coffees.push(command[1]);
        } else if (command[0].includes('Reverse')) {
            coffees.reverse();
        } else if (command[0].includes('Prefer')) {
            let maxIndex = Math.max(command[1], command[2]);
            if (coffees.length >= maxIndex + 1) {
                [coffees[command[1]], coffees[command[2]]] = [
                    coffees[command[2]],
                    coffees[command[1]],
                ];
            }
        }

        if (command[0].includes('Remove')) {
            let deletedCoffees = Number(command[2]);

            if (command[1].includes('first')) {
                coffees.splice(0, deletedCoffees);
            } else if (command[1].includes('last')) {
                coffees.reverse();
                coffees.splice(0, deletedCoffees);
                coffees.reverse();
            }
        }
    }

    console.log(`Coffees:`);
    console.log(coffees.join(' '));
}

// problem02([
//     'Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee',
//     5,
//     'Include TurkishCoffee',
//     'Remove first 2',
//     'Remove last 1',
//     'Prefer 3 1',
//     'Reverse',
// ]);
problem02([
    'Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica',
    '3',
    'Include OrdinaryCoffee',
    'Remove first 1',
    'Prefer 4 1',
]);
