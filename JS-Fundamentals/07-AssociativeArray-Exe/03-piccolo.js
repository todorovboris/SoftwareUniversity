function piccolo(arr) {
    const parkingLot = new Set();

    for (const token of arr) {
        const [action, carNumber] = token.split(', ');

        if (action === 'IN') {
            parkingLot.add(carNumber);
        } else if (action === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }

    let carNumberSorted = Array.from(parkingLot).sort();

    if (parkingLot.size > 0) {
        for (const car of carNumberSorted) {
            console.log(car);
        }
    } else {
        console.log(`Parking Lot is Empty`);
    }
}

// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU',
// ]);
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
