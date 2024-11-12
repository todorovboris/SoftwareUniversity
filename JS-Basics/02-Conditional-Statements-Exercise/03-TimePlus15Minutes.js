function TimePlus15Minutes(input){

    let hours = Number(input[0]);
    let mins = Number(input[1]);

    let totalMins = hours * 60 + mins + 15;
    let hoursNew = Math.floor(totalMins / 60);
    let minsNew = (totalMins % 60);

    if (hoursNew > 23){
        hoursNew = 0;
    }


    if (minsNew < 10){
        console.log(hoursNew + ":0" + minsNew);
    } else {
        console.log(hoursNew + ":" + minsNew);
    }

}

TimePlus15Minutes(["23","59"]);