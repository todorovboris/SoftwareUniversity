function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let liquid = Number(input[2]);
    let hours = Number(input[3]);

    nylonPrice = (nylon + 2) * 1.50;
    paintPrice = (paint + 0.1 * paint) * 14.50;
    liquidPrice = liquid * 5.00;
    totalPriceMaterials = nylonPrice + paintPrice + liquidPrice + 0.4;
    priceWorkers = 0.3 * totalPriceMaterials * hours;

    finalPrice = totalPriceMaterials + priceWorkers;

    console.log(finalPrice);
}

repainting(["10","11","4","8"])