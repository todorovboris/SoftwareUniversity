function solve(arr) {
    let word = arr.shift();

    let command = arr.shift();
    while (command !== 'Abracadabra') {
        let commandsArr = command.split(' ');
        let action = commandsArr[0];

        if (action === 'Abjuration') {
            word = word.toUpperCase();
            console.log(word);
        } else if (action === 'Necromancy') {
            word = word.toLowerCase();
            console.log(word);
        } else if (action === 'Illusion') {
            let index = Number(commandsArr[1]);
            let letter = commandsArr[2];

            if (index >= word.length) {
                console.log('The spell was too weak.');
            } else {
                let replacement1 = word.substring(0, index);
                let replacement2 = word.substring(index + 1);

                word = replacement1 + letter + replacement2;
                console.log('Done!');
            }
        } else if (action === 'Divination') {
            let firstSubstr = commandsArr[1];
            let secondSubstr = commandsArr[2];

            if (word.includes(firstSubstr)) {
                word = word.split(firstSubstr).join(secondSubstr);
                console.log(word);
            }
        } else if (action === 'Alteration') {
            let substr = commandsArr[1];
            if (word.includes(substr)) {
                word = word.replace(substr, '');
                console.log(word);
            }
        } else {
            console.log('The spell did not work!');
        }

        command = arr.shift();
    }

    // console.log(word);
}

solve(['A7ci0', 'Illusion 1 c', 'Illusion 4 o', 'Abjuration', 'Divination CC DD', 'Abracadabra']);
// solve(['TR1GG3R', 'Necromancy', 'Illusion 8 m', 'Illusion 9 n', 'Abracadabra']);
// solve(['SwordMaster', 'Target Target Target', 'Abjuration', 'Necromancy', 'Alteration master', 'Abracadabra']);
