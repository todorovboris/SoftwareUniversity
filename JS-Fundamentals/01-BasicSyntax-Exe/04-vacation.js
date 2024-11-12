function exe01(countGroup, typeGroup, day){
    let price = 0;

    if (typeGroup === "Students"){
        if (day === "Friday"){
            price = countGroup * 8.45;
        } else if (day === "Saturday"){
            price = countGroup * 9.80;
        } else if (day === "Sunday"){
            price = countGroup * 10.46;
        }

        if (countGroup >= 30){
            price = price * 0.85
        }

    } else if (typeGroup === "Business"){
        if (day === "Friday"){
            price = countGroup * 10.90;
            if (countGroup >= 100){
                price = price - 10 * 10.90
            }
        } else if (day === "Saturday"){
            price = countGroup * 15.60;
            if (countGroup >= 100){
                price = price - 10 * 15.60
            }
        } else if (day === "Sunday"){
            price = countGroup * 16.00;
            if (countGroup >= 100){
                price = price - 10 * 16.00
            }
        }
        
    } else if (typeGroup === "Regular"){
        if (day === "Friday"){
            price = countGroup * 15.00;
        } else if (day === "Saturday"){
            price = countGroup * 20.00;
        } else if (day === "Sunday"){
            price = countGroup * 22.50;
        }

        if (countGroup >= 10 && countGroup <= 20){
            price = price * 0.95;
        }

    }

    console.log(`Total price: ${price.toFixed(2)}`);

}

exe01(40,
    "Regular",
    "Saturday");