function signCheck(num1, num2, num3){
    let negativNumbers = 0;

    if (num1 < 0 ){
        negativNumbers++;
    }

    if (num2 < 0){
        negativNumbers++
    }
    
    if (num3 < 0){
        negativNumbers++
    }

    if (negativNumbers % 2 === 0){
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(5,12,-15);
signCheck(-6,-12,14);