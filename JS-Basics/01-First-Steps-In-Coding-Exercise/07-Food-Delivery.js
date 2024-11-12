function foodDelivery(input){
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);

    chickenPrice = chickenMenus * 10.35;
    fishPrice = fishMenus * 12.40;
    veganPrice = veganMenus * 8.15;
    totalPrice = chickenPrice + fishPrice + veganPrice;
    dessert = totalPrice * 0.2;

    finalPrice = totalPrice + dessert + 2.5;

    console.log(finalPrice);

}

foodDelivery(["9","2","6"])