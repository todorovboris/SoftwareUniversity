function Shopping(input){
    let budget = Number(input[0]);
    let countVideoCards = Number(input[1]);
    let countProcessors = Number(input[2]);
    let countRam = Number(input[3]);

    let videoCardsSum = countVideoCards * 250;
    let processorsSum = countProcessors * (0.35 * videoCardsSum);
    let ramSum = countRam * (0.10 * videoCardsSum);

    let totalSum = videoCardsSum + processorsSum + ramSum;

    if (countVideoCards > countProcessors){
        totalSum = totalSum * 0.85;
    }

    let diff = Math.abs(budget - totalSum);


    if (budget >= totalSum){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }

}

Shopping(["920.45",

"3",

"1",

"1"]);