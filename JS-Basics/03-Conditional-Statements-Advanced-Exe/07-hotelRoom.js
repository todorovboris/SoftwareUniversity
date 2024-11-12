function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;


    switch(month){
        case 'May':
        case 'October':
            priceStudio = 50;
            priceApartment = 65;

            if (nights > 7 && nights <= 14){
                priceStudio = priceStudio * 0.95;
            } else if (nights > 14){
                priceStudio = priceStudio * 0.70;
                priceApartment = priceApartment * 0.90;
            }
        break;

        case 'June':
        case 'September':
            priceStudio = 75.20
            priceApartment = 68.70;

            if (nights > 14){
                priceStudio = priceStudio * 0.80;
                priceApartment = priceApartment * 0.90;
            }
        break;

        case 'July':
        case 'August':
            priceStudio = 76;
            priceApartment = 77;
            
            if (nights > 14){
                priceApartment = priceApartment * 0.90;
            }
        break;

    }
    let finalPriceApartment = (nights * priceApartment).toFixed(2);
    let finalPriceStudio = (nights * priceStudio).toFixed(2);

    console.log(`Apartment: ${finalPriceApartment} lv.`);
    console.log(`Studio: ${finalPriceStudio} lv.`);
}

hotelRoom(["May",
"15"])
