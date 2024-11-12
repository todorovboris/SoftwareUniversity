function processOddNumbers(arr){
    const oddArr = [];

    for (let i = 0; i < arr.length; i++){
        
        if (i % 2 !== 0) {
            oddArr.unshift(arr[i]);
        }
    }

    const doubleNum = (e) => e * 2;
    const oddArrNew = oddArr.map(doubleNum);

    console.log(oddArrNew.join(' '));

}

// processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);