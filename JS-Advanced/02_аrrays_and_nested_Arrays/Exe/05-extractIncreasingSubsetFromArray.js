function exe(numsArr) {
    let comparedNum = numsArr.shift();
    let result = [comparedNum];

    for (const num of numsArr) {
        if (num >= comparedNum) {
            result.push(num);
            comparedNum = num;
        }
    }

    return result;
}

// console.log(exe([1, 3, 8, 4, 10, 12, 3, 2, 24]));

// -----------------------------------------------------------

function exe2(numsArr) {
    let comparedNum = Number.MIN_SAFE_INTEGER;
    return numsArr.reduce((acc, currV) => {
        if (currV >= comparedNum) {
            acc.push(currV);
            comparedNum = currV;
        }
        return acc;
    }, []);
}

console.log(exe2([1, 3, 8, 4, 10, 12, 3, 2, 24]));
