function vegetableMarket(input){

    let priceForKgVegetables = Number(input[0]);
    let priceForKgFruits = Number(input[1]);
    let totalKgVegetables = Number(input[2]);
    let totalKgFruits = Number(input[3]);

    let finalPriceVegetables = priceForKgVegetables * totalKgVegetables;
    let finalPriceFruits = priceForKgFruits * totalKgFruits;
    let finalPriceInEu = (finalPriceFruits + finalPriceVegetables) / 1.94;

    console.log(finalPriceInEu.toFixed(2));
}


vegetableMarket(["0.194","19.4","10","10"]);

