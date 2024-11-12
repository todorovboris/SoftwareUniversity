function GodzillaVsKong(input){
    let budget = Number(input[0]);
    let countStatists = Number(input[1]);
    let priceForOneClothing = Number(input[2]);

    let decores = budget * 0.1;

    let priceForAllClothes = 0;
    if (countStatists >= 150){
        priceForAllClothes = countStatists * (priceForOneClothing * 0.9);
    } else {
        priceForAllClothes = countStatists * priceForOneClothing;
    }

    let totalSum = decores + priceForAllClothes;
    let diff = Math.abs(budget - totalSum);
    if (totalSum > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}

GodzillaVsKong(["15437.62",

"186",

"57.99"]);