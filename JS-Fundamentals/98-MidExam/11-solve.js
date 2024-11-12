function solve(arr) {
    let jurneyCost = Number(arr[0]);
    let months = Number(arr[1]);
    let amount = 0;

    for (let i = 1; i <= months; i++) {
        if (i > 1 && i % 2 !== 0) {
            let beginingOfOddMonthSave = (16 / 100) * amount;
            amount -= beginingOfOddMonthSave;
        }

        if (i % 4 === 0) {
            let everyFourthMonthSave = (25 / 100) * amount;
            amount += everyFourthMonthSave;
        }

        let endMonthSave = (25 / 100) * jurneyCost;
        amount += endMonthSave;
    }

    let diff = Math.abs(amount - jurneyCost);

    if (amount >= jurneyCost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${diff.toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${diff.toFixed(2)}lv. more.`);
    }
}

// solve(['1000', '4']);
solve(['3265', '3']);
