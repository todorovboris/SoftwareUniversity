function skiTrip(input){
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];

    let countNights = days - 1;
    let finalPrice = 0;

    if (room === 'room for one person'){
        finalPrice = countNights * 18;
    } else if (room === 'apartment'){   
        finalPrice = countNights * 25;
        if (days < 10){
            finalPrice = finalPrice * 0.70;
        } else if (days <= 15){
            finalPrice = finalPrice * 0.65;
        } else {
            finalPrice = finalPrice * 0.50;
        }
    } else if (room === 'president apartment'){
        finalPrice = countNights * 35;
        if (days < 10){
            finalPrice = finalPrice * 0.90;
        } else if (days <= 15){
            finalPrice = finalPrice * 0.85;
        } else {
            finalPrice = finalPrice * 0.80;
        }
    }

    if (grade === 'positive'){
        finalPrice = finalPrice * 1.25;
    } else if (grade === 'negative'){
        finalPrice = finalPrice * 0.90;
    }

    console.log(finalPrice.toFixed(2));

}

skiTrip(["30",
"president apartment",
"negative"])
