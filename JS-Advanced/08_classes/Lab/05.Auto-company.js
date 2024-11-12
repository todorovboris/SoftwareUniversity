function solve(carsArr) {
    let register = {};
    for (const car of carsArr) {
        let [make, model, count] = car.split(' | ');
        count = Number(count);

        if (register.hasOwnProperty(make) == false) {
            register[make] = {};
        }

        if (register[make].hasOwnProperty(model) == false) {
            register[make][model] = 0;
        }

        register[make][model] += count;
    }

    for (const brand in register) {
        console.log(brand);

        for (const model in register[brand]) {
            console.log(`###${model} -> ${register[brand][model]}`);
        }
    }
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);
