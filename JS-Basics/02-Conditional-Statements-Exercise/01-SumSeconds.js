function SumSeconds(input){

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    let totalSecond = num1 + num2 + num3;
    let mins = Math.floor(totalSecond / 60);
    let seconds = totalSecond % 60;


    if (seconds < 10){
        console.log(mins + ":0" + seconds);
    } else {
        console.log(mins + ":" + seconds);
    }

    // console.log(totalSecond);

}

SumSeconds(["50","50","49"]);