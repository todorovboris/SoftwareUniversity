function LunchBreak(input){
    let name = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let relaxTime = breakDuration / 4;
    let timeLeft = breakDuration - lunchTime - relaxTime;

    let diff = Math.ceil(Math.abs(episodeDuration - timeLeft));
    
    if (timeLeft >= episodeDuration){
        console.log(`You have enough time to watch ${name} and left with ${diff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${diff} more minutes.`);
    }

}

LunchBreak(["Teen Wolf",

"48",

"60"]);