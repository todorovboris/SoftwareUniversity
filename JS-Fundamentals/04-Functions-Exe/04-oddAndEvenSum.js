function oddAndEvenSum(num){

    let numString = num + '';
    let sumOfEvens = 0;
    let sumOfOdds = 0;

    for (let i = 0; i < numString.length; i++){
        let currNum = Number(numString[i]);

        if (currNum % 2 !== 0){
            sumOfOdds += currNum;
        } else {
            sumOfEvens += currNum;
        }
    }
    console.log(`Odd sum = ${sumOfOdds}, Even sum = ${sumOfEvens}`);
}

oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234);