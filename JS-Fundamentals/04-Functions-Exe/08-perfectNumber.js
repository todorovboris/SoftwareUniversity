function perfectNumber(input){
    let sum = 0;
    
    function isDivider(num){
        for(let i = 0; i < num; i++){
            if (num % i === 0){
                sum += i;
            }
        }

        return sum;
    }


    let sumDividors = isDivider(input);
    
    if (sumDividors === input){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);