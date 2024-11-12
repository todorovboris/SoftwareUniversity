function argumentInfo(...args) {
    const argTypes = {};

    args.forEach((el) => {
        const type = typeof el;
        console.log(`${type}: ${el}`);

        if (!argTypes.hasOwnProperty(type)) {
            argTypes[type] = 0;
        }

        argTypes[type] += 1;
    });

    let sortedEntries = Object.entries(argTypes).sort((a, b) => b[1] - a[1]); // => sorted the obj in new arr;
    let sortedArgs = Object.fromEntries(sortedEntries); // get back the arr to obj;

    for (const type in sortedArgs) {
        console.log(`${type} = ${argTypes[type]}`);
    }
}

// argumentInfo('cat', 42, function () {
//     console.log('Hello world!');
// });
argumentInfo({ name: 'bob' }, 3.333, 9.999);
