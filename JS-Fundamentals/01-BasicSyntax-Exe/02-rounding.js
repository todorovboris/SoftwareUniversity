function exe01(num,decimal){

    if (decimal <= 15){
        console.log(parseFloat(num.toFixed(decimal)));
    } else {
        console.log(parseFloat(num.toFixed(15)));
    }

}

exe01(10.5,3)
