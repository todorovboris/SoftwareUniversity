function exe(arrNums){
    let arrSeq = [];

    for(let i = 0; i < arrNums.length; i++){
        let arrTemp = [];
        arrTemp.push(arrNums[i]);

        let currNum = arrNums[i];

        for(let j = i + 1; j < arrNums.length; j++){
            let nextNum = arrNums[j];

            if(currNum === nextNum){
                arrTemp.push(currNum);
            } else {
                break;
            }
        }

        if (arrTemp.length > arrSeq.length){
            arrSeq = arrTemp;
        } else if (arrTemp.length < arrSeq.length){
            arrSeq = arrSeq;
        }
    }

    console.log(arrSeq.join(" "));
}

// exe([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
exe([0, 1, 1, 5, 2, 2, 6, 3, 3]);