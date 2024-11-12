function exe(arrNums, countRotations){
    
    for (let rotation = 1; rotation <= countRotations; rotation++){
        let firstEl = arrNums.shift();
        arrNums.push(firstEl);
    }

    console.log(arrNums.join(' '));
}

exe([51, 47, 32, 61, 21], 2);
exe([32, 21, 61, 1], 4);