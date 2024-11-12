function cleverLily(input){
    let ageOfLily = Number(input[0]);
    let priceWashinMachine = Number(input[1]);
    let priceForToy = Number(input[2]);

    let toysCounter = 0;
    let moneySum = 0;
    let totalSum = 0;

    for(i = 1 ; i <= ageOfLily ; i++){
        if (i % 2 == 0){
            moneySum = moneySum + (i * 5) - 1;
        } else {
            toysCounter++
        }
    }

    totalSum = moneySum + (priceForToy * toysCounter);
    let diff = Math.abs(totalSum - priceWashinMachine);

    if (totalSum >= priceWashinMachine){
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }



}

cleverLily(["21",
"1570.98",
"3"])
