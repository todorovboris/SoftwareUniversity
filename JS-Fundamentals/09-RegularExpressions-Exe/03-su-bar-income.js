function solve(arr) {
    const regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+\.?\d+)\$/;
    let command = arr.shift();
    let totalIncome = 0;

    while (command !== 'end of shift') {
        // let isValid = command.match(regex);
        // if (!isValid) {
        //     command = arr.shift();
        //     continue;
        // }

        // let name = isValid.groups.customer;
        // let product = isValid.groups.product;
        // let count = isValid.groups.count;
        // let price = isValid.groups.price;

        // let sum = Number(count) * Number(price);
        // totalIncome += sum;

        // console.log(`${name}: ${product} - ${sum.toFixed(2)}`);

        let isValid = regex.test(command);

        if (isValid) {
            let match = command.match(regex);
            let { customer, product, count, price } = match.groups;
            let sum = Number(count) * Number(price);
            totalIncome += sum;

            console.log(`${customer}: ${product} - ${sum.toFixed(2)}`);
        }

        command = arr.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

// solve(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);
// solve(['%InvalidName%<Croissant>|2|10.3$', '%Peter%<Gum>1.3$', '%Maria%<Cola>|1|2.4', '%Valid%<Valid>valid|10|valid20$', 'end of shift']);
solve(['%Name%<Product>|1|20.50$', 'end of shift']);
