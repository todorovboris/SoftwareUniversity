function exe(arrNums,number){

    for(let i = 0; i < arrNums.length; i++){
        let arrTemp = [];
        let sumPairs = 0;
        let currNum = arrNums[i];

        for(let j = i + 1; j < arrNums.length; j++){
            let nextNum = arrNums[j];
            if(currNum + nextNum === number){
                arrTemp = [currNum, nextNum]
                console.log(arrTemp.join(" "));
            }
        }
    }
}

// exe([1, 7, 6, 2, 19, 23],8);
exe([14, 20, 60, 13, 7, 19, 8],27);