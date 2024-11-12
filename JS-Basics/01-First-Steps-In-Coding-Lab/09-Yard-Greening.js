function yardGreening(input){
    let totalPrice = input[0] * 7.61;
    let discount = 0.18 * totalPrice;
    let finalPrice = totalPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening([150])