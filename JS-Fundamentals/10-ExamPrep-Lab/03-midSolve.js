function solve(arr) {
    let neighborhood = arr.shift().split('@').map(Number);
    let houseIndex = 0;
    let countValentines = 0;

    let line = arr.shift();
    // console.log(arr);
    while (line !== 'Love!') {
        let tokens = line.split(' ');
        let jumpLength = Number(tokens[1]);

        houseIndex += jumpLength;
        if (houseIndex >= neighborhood.length) {
            houseIndex = 0;
        }

        if (neighborhood[houseIndex] === 0) {
            console.log(`Place ${houseIndex} already had Valentine's day.`);
            line = arr.shift();
            continue;
        }

        neighborhood[houseIndex] -= 2;
        if (neighborhood[houseIndex] <= 0) {
            console.log(`Place ${houseIndex} has Valentine's day.`);
            neighborhood[houseIndex] = 0;
        }
        line = arr.shift();
    }

    console.log(`Cupid's last position was ${houseIndex}.`);

    for (const house of neighborhood) {
        if (house > 0) {
            countValentines++;
        }
    }

    if (countValentines === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${countValentines} places.`);
    }
    // console.log(neighborhood);
}

// solve(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
solve(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']);
