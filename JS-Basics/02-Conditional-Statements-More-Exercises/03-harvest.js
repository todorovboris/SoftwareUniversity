function harvest(input){

    let area = Number(input[0]);
    let weightGrapeForSquareMeter = Number(input[1]);
    let neededLitersWine = Number(input[2]);
    let countWorkers = Number(input[3]);

    let totalWeightGrape = area * weightGrapeForSquareMeter;
    let weightForWine = 0.4 * totalWeightGrape;
    let litersWine = weightForWine / 2.5;

    let diff = Math.abs(neededLitersWine - litersWine);
    let wineForWorker = diff / countWorkers;

    if (litersWine < neededLitersWine){
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litersWine.toFixed(0))} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(wineForWorker)} liters per person.`);
    }
}

harvest(["1020","1.5","425","4"]);