function oscars(input){
    let nameActor = input[0];
    let pointsAcademy = Number(input[1]);
    let countEvaluator = Number(input[2]);

    let totalPoints=pointsAcademy;

    for(i = 3; i <= countEvaluator * 2 + 1; i+=2){
        let nameEvaluator = input[i];
        let pointsEvaluator = input[i+1];

        totalPoints = totalPoints + ((nameEvaluator.length * pointsEvaluator) / 2);

        if (totalPoints >= 1250.5){
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
        }
    }

    let diff = Math.abs(1250.5 - totalPoints);

    if (totalPoints < 1250.5){
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
    }

}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

