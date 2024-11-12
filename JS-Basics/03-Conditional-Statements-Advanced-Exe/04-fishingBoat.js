function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = input[2];

    let price = 0;

    if (season === 'Spring'){
        if (fishermen <= 6){
            price = 3000 * 0.90;
        } else if (fishermen <= 11){
            price = 3000 * 0.85;
        } else {
            price = 3000 * 0.75;
        }
    } else if (season === 'Summer' || season === 'Autumn'){
        if (fishermen <= 6){
            price = 4200 * 0.90;
        } else if (fishermen <= 11){
            price = 4200 * 0.85;
        } else {
            price = 4200 * 0.75;
        }
    } else if (season === 'Winter'){
        if (fishermen <= 6){
            price = 2600 * 0.90;
        } else if (fishermen <= 11){
            price = 2600 * 0.85;
        } else {
            price = 2600 * 0.75;
        }
    }

    if (fishermen % 2 == 0 && season != 'Autumn'){
        price = price * 0.95;
    }

    let diff = (Math.abs(budget - price)).toFixed(2);

    if (budget >= price){
        console.log(`Yes! You have ${diff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff} leva.`);
    }


}

fishingBoat(["3600",
"Autumn",
"6"])
