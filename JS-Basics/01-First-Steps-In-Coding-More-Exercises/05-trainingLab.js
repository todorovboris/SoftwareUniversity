function trainingLab(input){

    let w = Number(input[0]);
    let h = Number(input[1]);
    let widthInCm = w * 100;
    let highInCm = h * 100;

    let seatsPerHigh = Math.floor((highInCm - 100) / 70);
    let seatsPerWidth = Math.floor(widthInCm / 120);
    let totalSeats = seatsPerHigh * seatsPerWidth;

    // console.log(Math.floor(seatsPerHigh));
    // console.log(Math.floor(seatsPerWidth));

    console.log(totalSeats - 3);


}

trainingLab(["15","8.9"]);