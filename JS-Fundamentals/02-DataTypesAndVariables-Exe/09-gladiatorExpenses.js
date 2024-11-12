function exe02(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalExpenses = 0;
    let countShield = 0;

    for(i=1; i <= lostFights; i++){
        if (i % 2 === 0 && i % 3 === 0){
            totalExpenses += shieldPrice;
            countShield++;

            if (countShield === 2){
                totalExpenses += armorPrice;
                countShield = 0;
            }
        } 
        
        if (i % 2 === 0){
            totalExpenses += helmetPrice;
        } 
        
        if (i % 3 === 0){
            totalExpenses += swordPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

exe02(7,2,3,4,5);
exe02(23,12.50,21.50,40,200);