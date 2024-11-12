function solve(arr) {
    let carData = {};
    let count = arr.shift();

    for (let i = 1; i <= count; i++) {
        let carInfo = arr.shift().split('|');
        let carName = carInfo.shift();
        let carMileage = Number(carInfo.shift());
        let carFuel = Number(carInfo.shift());

        carData[carName] = { mileage: carMileage, fuel: carFuel };
    }

    let command = arr.shift();
    while (command !== 'Stop') {
        let tokens = command.split(' : ');
        let action = tokens.shift();
        let carName = tokens.shift();

        if (action === 'Drive') {
            let distanceToDrive = Number(tokens.shift());
            let neededFuel = Number(tokens.shift());

            if (carData[carName].fuel >= neededFuel) {
                carData[carName].mileage += distanceToDrive;
                carData[carName].fuel -= neededFuel;

                console.log(`${carName} driven for ${distanceToDrive} kilometers. ${neededFuel} liters of fuel consumed.`);

                if (carData[carName].mileage >= 100000) {
                    console.log(`Time to sell the ${carName}!`);
                    delete carData[carName];
                }
            } else {
                console.log('Not enough fuel to make that ride');
            }
        } else if (action === 'Refuel') {
            //
        } else if (action === 'Revert') {
            //
        }

        command = arr.shift();
    }

    // console.log(carData);
}

// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     // 'Refuel : Audi A6 : 50',
//     // 'Revert : Mercedes CLS : 500',
//     // 'Revert : Audi A6 : 30000',
//     'Stop',
// ]);

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop',
]);
