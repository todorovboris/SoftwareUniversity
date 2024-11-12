function solve(obj) {
    let myCar = {
        model: '',
        engine: {
            power: 0,
            volume: 0,
        },
        carriage: {
            type: '',
            color: '',
        },
        // wheels: [],
    };

    myCar.model = obj.model;

    if (obj.power <= 90) {
        myCar.engine.power = 90;
        myCar.engine.volume = 1800;
    } else if (obj.power <= 120) {
        myCar.engine.power = 120;
        myCar.engine.volume = 2400;
    } else {
        myCar.engine.power = 200;
        myCar.engine.volume = 3500;
    }

    if (obj.carriage === 'hatchback') {
        myCar.carriage.type = 'hatchback';
        myCar.carriage.color = obj.color;
    } else {
        myCar.carriage.type = 'coupe';
        myCar.carriage.color = obj.color;
    }

    if (obj.wheelsize % 2 !== 0) {
        let myWheels = obj.wheelsize;
        myCar.wheels = new Array(4).fill(myWheels);
    } else {
        let myWheels = obj.wheelsize - 1;
        myCar.wheels = new Array(4).fill(myWheels);
    }

    return myCar;
}

console.log(
    solve({
        model: 'Opel Vectra',

        power: 110,

        color: 'grey',

        carriage: 'coupe',

        wheelsize: 17,
    })
);
console.log(
    solve({
        model: 'VW Golf II',

        power: 90,

        color: 'blue',

        carriage: 'hatchback',

        wheelsize: 14,
    })
);
