function exe(steps, footPrint, speed) {
    let distance = steps * footPrint;
    let countRests = Math.floor(distance / 500) * 60;

    speed = speed / 3.6;

    let totalTime = (distance / speed + countRests).toFixed(0);
    // console.log(totalTime);

    let hours = Math.floor(totalTime / 3600); //18000
    let minutes = Math.floor((totalTime - hours * 3600) / 60);
    let seconds = totalTime % 60;

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minutesToPrint = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let secondsToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`;

    console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`);
}

exe(85000, 0.6, 5);
