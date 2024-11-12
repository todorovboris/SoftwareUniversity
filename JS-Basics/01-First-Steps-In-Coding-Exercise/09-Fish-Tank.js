function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percent = Number(input[3]);

    volumeDm3 = length * width * high / 1000;

    freeSpace = volumeDm3 - (volumeDm3 * percent / 100);

    console.log(freeSpace)

}

fishTank(['85','75','47','17'])