function provision(currStock, orderedStock) {
    const finalProducts = [];

    while (currStock.length > 0) {
        let currProducts = currStock.splice(0, 2);

        finalProducts.push({
            name: currProducts[0],
            quantity: Number(currProducts[1]),
        });
    }

    while (orderedStock.length > 0) {
        let orderedProducts = orderedStock.splice(0, 2);
        const orderedProductsName = orderedProducts[0];
        const orderedProductsQty = Number(orderedProducts[1]);

        const found = finalProducts.find((found) => found.name === orderedProductsName);

        if (found) {
            found.quantity += orderedProductsQty;
        } else {
            finalProducts.push({ name: orderedProductsName, quantity: orderedProductsQty });
        }

        // console.log(orderedProducts);
        // console.log(orderedProductsName);
        // console.log(orderedProductsQty);
    }

    for (const tuples of finalProducts) {
        console.log(`${tuples.name} -> ${tuples.quantity}`); //product -> quantity
    }
}

provision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
