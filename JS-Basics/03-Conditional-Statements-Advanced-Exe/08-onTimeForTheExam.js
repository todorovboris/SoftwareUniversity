function onTimeForTheExam(input){
    let hourOfExam = Number(input[0]);
    let minutesOfExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minutesOfArrival = Number(input[3]);

    let totalMinutesOfExam = hourOfExam * 60 + minutesOfExam;
    let totalMinutesOfArrival = hourOfArrival * 60 + minutesOfArrival;

    let diff = (totalMinutesOfExam - totalMinutesOfArrival);

    let hh = 0;
    let mm = 0;

    if (diff < 0){
        diff = Math.abs(diff)
        console.log('Late');
        if (diff < 60){
            console.log(`${diff} minutes after the start`);
        } else {
            hh = Math.floor(diff / 60);
            mm = diff % 60;
            if (mm < 10){
                console.log(`${hh}:0${mm} hours after the start`);
            } else {
                console.log(`${hh}:${mm} hours after the start`);
            }
        }
    }  else if (diff > 30){
        console.log('Early');
        if (diff < 60){
            console.log(`${diff} minutes before the start`);
        } else {
            hh = Math.floor(diff / 60);
            mm = diff % 60;
            if (mm < 10){
                console.log(`${hh}:0${mm} hours before the start`);
            } else {
                console.log(`${hh}:${mm} hours before the start`);
            }
        }
    } else if (diff > 0 && diff <= 30){
        diff = Math.abs(diff);
        console.log('On time');
        console.log(`${diff} minutes before the start`);
    } else if (diff === 0){
        console.log('On time');
    }
}

onTimeForTheExam(["10",
"00",
"10",
"00"])

