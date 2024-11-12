function exe(arrNums){
    
    let isEqual = false;
    let position = 0;
    
    for(let i = 0; i < arrNums.length; i++){
        let currNum = arrNums[i];
        let sumBefore = 0;
        let sumAfter = 0;
        
        for(let j = i + 1; j < arrNums.length; j++){
            sumAfter += arrNums[j];
        }

        for(let k = i - 1; k >= 0; k--){
            sumBefore += arrNums[k];
        }

        if (sumAfter === sumBefore){
            isEqual = true;
            position = i;
        }
    }

    if (isEqual){
        console.log(position);
    } else {
        console.log('no');
    }


}

// exe([1, 2, 3, 3]);
exe([10, 5, 5, 99,3, 4, 2, 5, 1,1, 4]);