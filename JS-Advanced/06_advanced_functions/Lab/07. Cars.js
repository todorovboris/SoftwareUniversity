function solve(commandsArr) {
    const objects = {};

    const commandProcessor = {
        create: (name, parentName) => {
            if (parentName) {
                objects[name] = Object.create(objects[parentName]);
            } else {
                objects[name] = {};
            }
        },
        set: (name, key, value) => {
            objects[name][key] = value;
        },
        print: (name) => {
            let result = [];
            for (let key in objects[name]) {
                result.push(`${key}:${objects[name][key]}`);
            }
            console.log(result.join(','));
        },
    };

    commandsArr.forEach((el) => {
        let row = el.split(' ');

        if (row[0] === 'create' && row[2] === 'inherit') {
            commandProcessor.create(row[1], row[3]); // create <name> inherits <parentName>
        } else if (row[0] === 'create') {
            commandProcessor.create(row[1]); // create <name>
        } else if (row[0] === 'set') {
            commandProcessor.set(row[1], row[2], row[3]); // set <name> <key> <value>
        } else if (row[0] === 'print') {
            commandProcessor.print(row[1]); // print <name>
        }
    });
}

solve(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);
