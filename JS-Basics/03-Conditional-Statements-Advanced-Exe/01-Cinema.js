function Cinema(input){

    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let totalSeats = r * c;


    switch(type){
        case 'Premiere':
            console.log((totalSeats * 12.00).toFixed(2) + ' leva');
        break;
        case 'Normal':
            console.log((totalSeats * 7.50).toFixed(2) + ' leva');
        break;
        case 'Discount':
            console.log((totalSeats * 5.00).toFixed(2) + ' leva');
        break;
    }


}

Cinema(["Premiere",
"10",
"12"])
