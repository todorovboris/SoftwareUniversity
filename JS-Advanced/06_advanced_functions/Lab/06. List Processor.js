function solve(commands) {
    let result = [];

    const commandProcessor = {
        add: (item) => result.push(item),
        remove: (item) => {
            result = result.filter((x) => x !== item);
        },
        print: () => {
            console.log(result.join(','));
        },
    };

    for (const text of commands) {
        let [command, value] = text.split(' ');
        commandProcessor[command](value);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
