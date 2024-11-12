function exe(arr) {
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    for (const name of sortedArr) {
        console.log(name);
    }
}

exe(['test', 'Deny', 'omen', 'Default']);
