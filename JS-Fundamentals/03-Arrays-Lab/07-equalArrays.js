function lab(numbers1, numbers2){
    
    let sum = 0;
    let isIdentical = true;

    for (let i = 0; i < numbers1.length; i++){
        if (numbers1[i] === numbers2[i]){
            sum += Number(numbers1[i]);
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        }
    }

    if (isIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

lab(['10','20','30'],
['10','20','30']);
lab(['1','2','3','4','5'],
['1','2','4','4','5']);