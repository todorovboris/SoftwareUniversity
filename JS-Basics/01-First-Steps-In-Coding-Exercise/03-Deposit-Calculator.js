function depositCalculator(input){
    let deposit = Number(input[0]);
    let lengthDeposit = Number(input[1]);
    let annualPercent = Number(input[2]);
    
    // сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let sum = deposit + lengthDeposit * ((deposit * annualPercent / 100) / 12);

    console.log(sum);


}

depositCalculator(['2350','6','7'])