function factorialDivision(num1, num2){
    
    function calculateFactorials(number){
        let result = 1;

        for(let i = 2; i <= number; i++){
            result *= i;
        }

        return result;
    }


    let factorial1 = calculateFactorials(num1);
    let factorial2 = calculateFactorials(num2);

    console.log((factorial1 / factorial2).toFixed(2));
}

factorialDivision(5,2);
// factorialDivision(6,2);
