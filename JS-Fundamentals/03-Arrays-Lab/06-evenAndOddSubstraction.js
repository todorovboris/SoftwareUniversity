function lab(numbers){
    let sumEven = 0;
    let sumOdd = 0;

    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            sumEven += numbers[i];
        } else {
            sumOdd += numbers[i];
        }
    }

    console.log(sumEven - sumOdd);

}

lab([1,2,3,4,5,6]);
lab([2,4,6,8,10]);