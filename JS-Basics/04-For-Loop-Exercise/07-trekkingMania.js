function trekkingMania(input){
    let countGroups = Number(input[0]);

    let totalClimbers = 0;

    let climbersMusala=0;
    let climbersMonblan=0;
    let climbersKilimandjaro=0;
    let climbersK2 = 0;
    let climbersEverest=0

    for(i = 1; i <= countGroups; i++){
        let countClimber = Number(input[i]);
        totalClimbers += countClimber;

        if (countClimber <= 5){
            climbersMusala += countClimber;
        } else if (countClimber <= 12){
            climbersMonblan += countClimber;
        } else if (countClimber <= 25){
            climbersKilimandjaro += countClimber;
        } else if (countClimber <= 40){
            climbersK2 += countClimber;
        } else {
            climbersEverest += countClimber;
        }
    }

    console.log((climbersMusala / totalClimbers * 100).toFixed(2) + "%");
    console.log((climbersMonblan / totalClimbers * 100).toFixed(2) + "%");
    console.log((climbersKilimandjaro / totalClimbers * 100).toFixed(2) + "%");
    console.log((climbersK2 / totalClimbers * 100).toFixed(2) + "%");
    console.log((climbersEverest / totalClimbers * 100).toFixed(2) + "%");
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
