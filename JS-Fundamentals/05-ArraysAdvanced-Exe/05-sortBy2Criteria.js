function sortBy2Criteria(arr) {
    let arrOrdered = arr.sort();
    let resultArr = arrOrdered.sort((a, b) => a.length - b.length);

    console.log(resultArr.join('\n'));
}

// sortBy2Criteria(['alpha', 'beta', 'gamma']);
sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
