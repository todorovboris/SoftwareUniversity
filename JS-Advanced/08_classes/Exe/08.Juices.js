function processJuices(input) {
    const juices = new Map();
    const juiceBottles = new Map();

    for (const line of input) {
        const [juice, quantity] = line.split(' => ');

        if (!juices.has(juice)) {
            juices.set(juice, 0);
        }

        juices.set(juice, juices.get(juice) + Number(quantity));

        if (juices.get(juice) >= 1000) {
            const juiceBottle = parseInt(juices.get(juice) / 1000);

            if (!juiceBottles.has(juice)) {
                juiceBottles.set(juice, 0);
            }

            juiceBottles.set(juice, juiceBottles.get(juice) + juiceBottle);
            juices.set(juice, juices.get(juice) - juiceBottle * 1000);
        }

        // while (juices[juice] >= 1000) {
        //     const bottlesProduced = Math.floor(juices[juice] / 1000);
        //     juiceBottles.push(`${juice} => ${bottlesProduced}`);
        //     juices[juice] -= bottlesProduced * 1000; // Reduce the stored juice
        // }
    }

    for (const [juice, bottleCount] of juiceBottles) {
        console.log(`${juice} => ${bottleCount}`);
    }
}

// Example usage:
processJuices(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
// Expected output:
// Orange => 2
// Peach => 2

processJuices(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);
// Expected output:
// Pear => 8
// Watermelon => 10
// Kiwi => 4
