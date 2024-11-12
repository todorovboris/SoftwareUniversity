function journey(input){

    let budget = Number(input[0]);
    let season = input[1];

    let destination ;
    let spentMoney ;
    let holiday ;

    switch(season){
        case 'summer':
            if (budget <= 100){
                spentMoney = budget * 0.3;
                destination = 'Bulgaria';
                holiday = 'Camp'
            } else if (budget <= 1000){
                spentMoney = budget * 0.4;
                destination = 'Balkans';
                holiday = 'Camp'
            } else {
                spentMoney = budget * 0.9;
                destination = 'Europe';
                holiday = 'Hotel'
            }

            console.log(`Somewhere in ${destination}`);
            console.log(`${holiday} - ${spentMoney.toFixed(2)}`);
        break;

        case 'winter':
            if (budget <= 100){
                spentMoney = budget * 0.7;
                destination = 'Bulgaria';
                holiday = 'Hotel'
            } else if (budget <= 1000){
                spentMoney = budget * 0.8;
                destination = 'Balkans';
                holiday = 'Hotel'

            } else {
                spentMoney = budget * 0.9;
                destination = 'Europe';
                holiday = 'Hotel'
            }

            console.log(`Somewhere in ${destination}`);
            console.log(`${holiday} - ${spentMoney.toFixed(2)}`);
        break;

    }

    // if (budget <= 100){
    //     if (season === 'summer'){
    //         spentMoney = 0.3 * budget;
    //     } else if (season === 'winter'){
    //         spentMoney = 0.7 * budget
    //     }

    //     console.log();
    // }


}

journey(["1500", "summer"])