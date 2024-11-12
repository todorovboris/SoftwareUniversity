function negativeOrPositiveNumbers(arr){
    const numsArr = arr.map(Number);

    const numsArrNew = [];

    for(let i = 0; i < numsArr.length; i++){
        if (numsArr[i] < 0){
            numsArrNew.unshift(numsArr[i]);
        } else {
            numsArrNew.push(numsArr[i]);
        }
    }

    console.log(numsArrNew.join('\n'));
}

// negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);