function summerOutfit(input){
    let degrees = Number(input[0]);
    let time = input[1];

    let Outfit ;
    let Shoes ;

    switch(time){
        case 'Morning':
            if (degrees >= 10 && degrees <= 18){
                Outfit = 'Sweatshirt'
                Shoes = 'Sneakers'
            } else if (degrees > 18 && degrees <= 24){
                Outfit = 'Shirt';
                Shoes = 'Moccasins';
            } else if (degrees >= 25){
                Outfit = 'T-Shirt';
                Shoes = 'Sandals';
            }
        break;

        case 'Afternoon':
            if (degrees >= 10 && degrees <= 18){
                Outfit = 'Shirt'
                Shoes = 'Moccasins'
            } else if (degrees > 18 && degrees <= 24){
                Outfit = 'T-Shirt';
                Shoes = 'Sandals';
            } else if (degrees >= 25){
                Outfit = 'Swim Suit';
                Shoes = 'Barefoot';
            }
        break;

        case 'Evening':
            if (degrees >= 10 && degrees <= 18){
                Outfit = 'Shirt'
                Shoes = 'Moccasins'
            } else if (degrees > 18 && degrees <= 24){
                Outfit = 'Shirt'
                Shoes = 'Moccasins'
            } else if (degrees >= 25){
                Outfit = 'Shirt'
                Shoes = 'Moccasins'
            }
        break

    }

    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`)

}

summerOutfit(["22",
"Afternoon"])
