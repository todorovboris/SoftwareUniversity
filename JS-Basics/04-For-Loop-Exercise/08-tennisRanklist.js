function tennisRanklist(input){
    let countTournaments = Number(input[0]);
    let pointsTotal = Number(input[1]);

    let points = 0;
    let countWins = 0;

    for(i = 2; i <= countTournaments + 1; i++){
        let stage = input[i];

        switch(stage){
            case "W":
                points = points + 2000;
                countWins++;
            break;

            case "F":
                points = points + 1200;
            break;

            case "SF":
                points = points + 720;
            break;
        }
    }

    pointsTotal += points;


    console.log(`Final points: ${pointsTotal}`);
    console.log(`Average points: ` + (Math.floor(points / countTournaments)));
    console.log(`${((countWins / countTournaments) * 100).toFixed(2)}` + "%");
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
