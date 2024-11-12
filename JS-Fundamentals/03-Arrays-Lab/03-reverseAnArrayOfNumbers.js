function lab03(n,numOriginal){
    let numReverse = [];

    for (let i = n - 1; i >= 0; i--){
        numReverse.push(numOriginal[i]);
    }

    console.log(numReverse.join(" "));

}

lab03(3, [10, 20, 30, 40, 50]);
lab03(4, [-1, 20, 99, 5]);
lab03(2, [66, 43, 75, 89, 47]);