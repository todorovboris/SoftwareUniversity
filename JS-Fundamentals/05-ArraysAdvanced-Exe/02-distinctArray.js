function distinctArray(arr){
    let resultArr = [];

    for(let num of arr){
        if (!resultArr.includes(num)){
            resultArr.push(num);
        }
    }

    console.log(resultArr.join(' '));
}

// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);