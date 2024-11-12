function solve(input) {
    let message = input.shift();

    while (input[0] !== 'Decode') {
        const command = input.shift().split('|');
        const action = command[0];

        if (action === 'Move') {
            let letterCount = Number(command[1]);

            for (let i = 1; i <= letterCount; i++) {
                message = message.split('');
                let replacement = message.shift();
                message.push(replacement);
                message = message.join('');
            }
        } else if (action === 'ChangeAll') {
            let targetSymbol = command[1];
            let replacement = command[2];
            message = message.split(targetSymbol).join(replacement);
            // message = message.replaceAll(targetSymbol, replacement);
        } else if (action === 'Insert') {
            const value = command[2];
            const index = command[1];

            message = message.split('');
            message.splice(index, 0, value);
            message = message.join('');
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
