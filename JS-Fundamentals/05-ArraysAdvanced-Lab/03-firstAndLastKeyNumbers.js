function firstAndLastKeyNumbers(numsArr){
    const k = numsArr[0];

    const firstNums = numsArr.slice(1,k+1);
    const lastNums = numsArr.slice(-k);

    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));

}

firstAndLastKeyNumbers([2, 7, 8, 9]);
console.log('---------------');
firstAndLastKeyNumbers([3, 6, 7, 8, 9]);