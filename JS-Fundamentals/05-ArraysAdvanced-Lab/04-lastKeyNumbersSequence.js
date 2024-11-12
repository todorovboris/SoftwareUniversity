function lastKNumSeq(n, k){
    const newArr = [1];

    for(let i = 2; i <= n; i++){
        let sum = 0;
        let lastNums = newArr.slice(-k);

        // for(let num of lastNums ){
        //     sum += num;
        // }

        for(let j = 0; j <= lastNums.length - 1; j++){
            sum += lastNums[j];
        }

        newArr.push(sum);
    }

    console.log(newArr.join(' '));
}

lastKNumSeq(6, 3);
// lastKNumSeq(8, 2);