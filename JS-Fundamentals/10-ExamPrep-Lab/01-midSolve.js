function solve(arr) {
    let foodQuantity = Number(arr[0] * 1000);
    let hayQuantity = Number(arr[1] * 1000);
    let coverQuantity = Number(arr[2] * 1000);
    let guineaWeight = Number(arr[3] * 1000);
    let isEnough = true;

    for (let i = 1; i <= 30; i++) {
        foodQuantity -= 300;

        if (i % 2 === 0) {
            let hayForOneDay = 0.05 * foodQuantity;
            hayQuantity -= hayForOneDay;
        }

        if (i % 3 === 0) {
            let coverForOneDay = (1 / 3) * guineaWeight;
            coverQuantity = coverQuantity - coverForOneDay;
        }

        if (foodQuantity < 0 || hayQuantity < 0 || coverQuantity < 0) {
            console.log('Merry must go to the pet store!');
            isEnough = false;
            break;
        }
    }

    if (isEnough) {
        console.log(
            `Everything is fine! Puppy is happy! Food: ${(foodQuantity / 1000).toFixed(2)}, Hay: ${(hayQuantity / 1000).toFixed(2)}, Cover: ${(
                coverQuantity / 1000
            ).toFixed(2)}.`
        );
    }
}

solve(['10', '5', '5.2', '1']);
