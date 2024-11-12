function BonusScore(input){

    let num = Number(input[0]);
    
    let bonus = 0;

    if (num <= 100){
        bonus = 5;
    } else if (num <= 1000 ){
        bonus = 0.2 * num;
    } else {
        bonus = 0.1 * num
    }


    if (num % 2 == 0){
        bonus++;
    } else if (num % 10 == 5){
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(bonus + num);   

}

BonusScore(["175"])