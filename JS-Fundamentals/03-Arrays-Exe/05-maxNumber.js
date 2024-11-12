function exe(arrNums){

    let arrMax = [];

    for(let i = 0; i < arrNums.length; i++){
        let currNum = arrNums[i];
        let isMax = true;

        for(let j = i + 1; j < arrNums.length; j++){
            let checkingNum = arrNums[j];
            if (currNum <= arrNums[j]){
                isMax = false;
                break;
            }
        }

        if (isMax){
            arrMax.push(currNum);
        }
    }

    console.log(arrMax.join(' '));
}

// exe([1, 4, 3, 2]);
// exe([41, 41, 34, 20]);
exe([27, 19, 42, 2, 13, 45, 48]);