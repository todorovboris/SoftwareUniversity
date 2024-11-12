function solve(input) {
    let productMap = {};

    for (let entry of input) {
        let [town, product, price] = entry.split(' | ');
        price = Number(price);

        if (!productMap[product] || productMap[product].price > price) {
            productMap[product] = { town, price };
        }
    }
    for (let product in productMap) {
        console.log(`${product} -> ${productMap[product].price} (${productMap[product].town})`);
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
]);
