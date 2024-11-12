function bombNumber(arr1, arr2) {
    let sum = 0;
    const bombNumber = arr2[0];
    const numsToDelete = arr2[1];
    const sequence = 2 * numsToDelete + 1;
    let indexOfBomb = arr1.indexOf(bombNumber);

    let firstElement = indexOfBomb - numsToDelete;

    const newArr = arr1.splice(firstElement, sequence);

    for (let nums of arr1) {
        sum += nums;
    }

    console.log(sum);
}

// bombNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumber([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
