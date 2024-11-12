function solve(arr) {
    let totalPrice = 0;

    let command = arr.shift();
    while (command !== 'special' && command !== 'regular') {
        let itemPrice = Number(command);

        if (itemPrice < 0) {
            console.log('Invalid price!');
        } else {
            totalPrice += itemPrice;
        }

        command = arr.shift();
    }

    const taxes = 0.2 * totalPrice;
    let priceWithTaxes = totalPrice + taxes;

    if (totalPrice === 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');

        if (command === 'special') {
            priceWithTaxes = priceWithTaxes * 0.9;
        }

        console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
    }
}

solve(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
