function sleepyTomCat(input){
    let restDays = Number(input[0]);
    let workingDays = 365 - restDays;

    let minutesInPlayInWorkingDays = workingDays * 63;
    let minutesInPlayInRestDays = restDays * 127;
    let totalTimeInPlay = minutesInPlayInRestDays + minutesInPlayInWorkingDays;
    let diff = Math.abs(30000 - (minutesInPlayInRestDays + minutesInPlayInWorkingDays));

    let totalHoursInPlay = Math.floor(diff / 60);
    let totalMinutesInPlay = diff % 60;

    if (totalTimeInPlay > 30000){
        console.log("Tom will run away");
        console.log(`${totalHoursInPlay} hours and ${totalMinutesInPlay} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${totalHoursInPlay} hours and ${totalMinutesInPlay} minutes less for play`);
    }
}

sleepyTomCat(["113"]);