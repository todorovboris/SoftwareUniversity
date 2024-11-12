function WorldSwimmingRecord(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let timeForAllMeters = distance * timeForOneMeter;
    let additionalTime = (Math.floor(distance / 15)) * 12.5;
    let totalTime = timeForAllMeters + additionalTime;
    let diff = Math.abs(totalTime - record);

    if (totalTime >= record){
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }

}

WorldSwimmingRecord(["55555.67",

"3017",
"5.03"]);