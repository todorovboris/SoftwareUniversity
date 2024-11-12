function fishland(input){
    let priceForSkumriq = Number(input[0]);
    let priceForTsatsa = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let shellsKg = Number(input[4]);

    let shellsSum = shellsKg * 7.50;
    let palamudSum = priceForSkumriq * 1.6 * palamudKg;
    let safridSum = priceForTsatsa * 1.8 * safridKg;

    let totalSum = shellsSum + palamudSum + safridSum;

    console.log(totalSum.toFixed(2));
}



fishland(["6.90","4.20","1.5","2.5","1"]);

