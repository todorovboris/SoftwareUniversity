function solution() {
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    // Recipes and their ingredient requirements
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    // Management function to process the commands
    return function (command) {
        const parts = command.split(' ');
        const action = parts[0];

        // console.log(parts[0]);

        if (action === 'restock') {
            const microelement = parts[1];
            const quantity = parseInt(parts[2], 10);
            stock[microelement] += quantity;
            return 'Success';
        } else if (action === 'prepare') {
            const recipe = parts[1];
            const quantity = parseInt(parts[2], 10);
            const requiredIngredients = recipes[recipe];

            // Check if enough ingredients are available
            for (const ingredient in requiredIngredients) {
                const requiredQty = requiredIngredients[ingredient] * quantity;
                if (stock[ingredient] < requiredQty) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            // Deduct the required ingredients from the stock
            for (const ingredient in requiredIngredients) {
                stock[ingredient] -= requiredIngredients[ingredient] * quantity;
            }

            return 'Success';
        } else if (action === 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    };
}

let manager = solution();
console.log(manager('restock flavour 50')); // Success
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare apple 1')); // Success
console.log(manager('restock fat 10')); // Success
console.log(manager('prepare burger 1')); // Success
console.log(manager('report')); // protein=0 carbohydrate=4 fat=3 flavour=55
