function solve(arr) {
    let message = arr.shift();

    let command = arr.shift();
    while (command !== 'Reveal') {
        const chars = command.split(':|:');
        // console.log(chars[0]);
        if (chars[0] === 'ChangeAll') {
            message = message.split(chars[1]).join(chars[2]);
            console.log(message);
        } else if (chars[0] === 'Reverse' && !message.includes(chars[1])) {
            console.log('error');
        } else if (chars[0] === 'Reverse' && message.includes(chars[1])) {
            let reversed = chars[1].split('').reverse().join('');
            // console.log(reversed);
            message = message.replace(chars[1], reversed);
            console.log(message);
        } else if (chars[0] === 'InsertSpace') {
            let index = chars[1];
            message = message.slice(0, index) + ' ' + message.slice(index);
            console.log(message);
        }

        command = arr.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

// solve(['heVVodar!gniV', 'ChangeAll:|:V:|:l', 'Reverse:|:!gnil', 'InsertSpace:|:5', 'Reveal']);
solve(['Hiware?uiy', 'ChangeAll:|:i:|:o', 'Reverse:|:?uoy', 'Reverse:|:jd', 'InsertSpace:|:3', 'InsertSpace:|:7', 'Reveal']);
