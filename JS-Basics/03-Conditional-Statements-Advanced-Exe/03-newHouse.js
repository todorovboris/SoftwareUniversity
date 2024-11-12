function newHouse(input){

    let flower = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    if (flower === 'Roses'){
        price = countFlowers * 5;
        if (countFlowers > 80){
            price = 0.9 * price;
        }
    } else if (flower === 'Dahlias'){
        price = countFlowers * 3.80;
        if (countFlowers > 90){
            price = 0.85 * price;
        }
    } else if (flower === 'Tulips'){
        price = countFlowers * 2.80;
        if (countFlowers > 80){
            price = 0.85 * price;
        }
    } else if (flower === 'Narcissus'){
        price = countFlowers * 3;
        if (countFlowers < 120){
            price = price * 1.15;
        }
    } else if (flower === 'Gladiolus'){
        price = countFlowers * 2.50;
        if (countFlowers < 80){
            price = price * 1.20;
        }
    }

    let diff = (Math.abs(budget - price)).toFixed(2);
    if (budget >= price){
        console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${diff} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff} leva more.`);
    }
}

newHouse(["Roses",
"55",
"250"])
    
