function transportPrice(input){
    let km = Number(input[0]);
    let partOfTheDay = input[1];

    let priceTaxi = 0;
    let priceBus = 0;
    let priceTrain = 0;
    let minPrice = 0;

    if (partOfTheDay === "day"){
        priceTaxi = km * 0.79 + 0.7;
        priceBus = km * 0.09;
        priceTrain = km * 0.06
    } else if (partOfTheDay === "night"){
        priceTaxi = km * 0.90 + 0.7;
        priceBus = km * 0.09;
        priceTrain = km * 0.06
    }

    minPrice = priceTaxi;

    if (km < 20){
        minPrice = priceTaxi;
    } else if (km < 100 && priceBus <= priceTaxi) {
        minPrice = priceBus;
    } else if (km >= 100 && priceBus <= priceTaxi && priceBus <= priceTrain){
        minPrice = priceBus;
    } else if (km >= 100 && priceTrain <= priceBus && priceTrain <= priceTaxi){
        minPrice = priceTrain;
    }

    console.log(minPrice.toFixed(2));

}

transportPrice(["25","day"]);