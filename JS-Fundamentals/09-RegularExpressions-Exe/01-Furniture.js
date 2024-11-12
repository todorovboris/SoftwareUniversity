function solve(input) {
    let regex = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let text = input.shift();
    let totalPrice = 0;
    let furnitures = [];

    while (text !== 'Purchase') {
        let match = text.match(regex);
        // console.log(match);

        if (match) {
            let { name, price, quantity } = match.groups;
            let sum = Number(price) * Number(quantity);
            totalPrice += sum;
            furnitures.push(name);
        }

        text = input.shift();
    }

    console.log('Bought furniture:');
    furnitures.forEach((item) => console.log(item));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve(['>>Laptop<<312.2323!3', '>>TV<<300.21314!5', '>Invalid<<!5', '>>TV<<300.21314!20', '>>Invalid<!5', '>>TV<<30.21314!5', '>>Invalid<<!!5', 'Purchase']);
