function exe02(num){
    let days = 0;
    let totalConsumtion = 0;

    // for (i = num; i >= 100; i -= 10){
    //     days++;
    //     let currentConsumtion = i - 26;
    //     totalConsumtion += currentConsumtion
    // }

    while(num >= 100){
        days++;
        let currentConsumtion = num - 26;
        totalConsumtion += currentConsumtion;
        num -= 10;
    }

    totalConsumtion -= 26;
    
    if (days > 0) {
        console.log(days);
        console.log(totalConsumtion);
    } else {
        console.log(0);
        console.log(0);
    }

}

exe02(111);