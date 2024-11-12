function suppliesForSchool(input){
    let pencils = Number(input[0]);
    let markers = Number(input[1]);
    let liquid = Number(input[2]);
    let discout = Number(input[3]);

    totalPricePencils = pencils * 5.80;
    totalPriceMarkers = markers * 7.20;
    totalPriceLiquid = liquid * 1.20;
    totalPrice = totalPriceLiquid + totalPriceMarkers + totalPricePencils;
    totalPrice = totalPrice * (1 - discout / 100);
    // rounded =  totalPrice.toFixed(3);

    

    console.log(totalPrice)

}

suppliesForSchool(["4","2","5","13"])