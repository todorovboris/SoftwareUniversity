function exe(commands) {
    let num = 1;
    let result = [];

    for (const command of commands) {
        if (command === 'add') {
            result.push(num);
        } else {
            result.pop();
        }
        num++;
    }

    if (result.length > 0) {
        result.forEach((el) => {
            console.log(el);
        });
    } else {
        console.log('Empty');
    }
}

exe(['remove', 'remove', 'remove']);
