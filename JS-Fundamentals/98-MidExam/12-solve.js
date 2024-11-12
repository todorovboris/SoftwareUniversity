function solve(arr) {
    let numbers = arr.shift().split(' ').map(Number);

    let command = arr.shift();
    while (command !== 'END') {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action === 'add') {
            for (let i = tokens.length - 1; i >= 3; i--) {
                let num = Number(tokens[i]);
                numbers.unshift(num);
            }
        }

        if (action === 'remove') {
            if (tokens[1] === 'greater') {
                let index = tokens[3];
                numbers = numbers.filter((x) => x <= index);
                // console.log(numbers);
            } else if (tokens[1] === 'at') {
                let index = tokens[3];
                if (index >= 0 && index < numbers.length) {
                    numbers.splice(index, 1);
                }
            }
        }

        if (action === 'replace') {
            let value = Number(tokens[1]);
            let replacement = Number(tokens[2]);
            let indexOfValue = numbers.indexOf(value);
            // console.log(indexOfValue);

            if (indexOfValue !== -1) {
                numbers.splice(indexOfValue, 1, replacement);
            }
        }

        if (action === 'find') {
            let type = tokens[1];

            if (type === 'even') {
                let evens = numbers.filter((x) => x % 2 === 0);
                console.log(evens.join(' '));
            } else if (type === 'odd') {
                let odds = numbers.filter((x) => x % 2 !== 0);
                console.log(odds.join(' '));
            }
        }

        command = arr.shift();
    }

    console.log(numbers.join(', '));
}

// solve(['1 2 3 10 10 6 4 10', 'add to start 1 2 3', 'remove greater than 5', 'find even', 'END']);
// solve(['1 2 3 10 10 6 4 10', 'replace 10 1', 'remove at index 0', 'add to start 4 2', 'END']);

solve(['1 2 3 10 10 6 4 10', 'find odd', 'replace 4 1', 'remove greater than 5', 'END']);
