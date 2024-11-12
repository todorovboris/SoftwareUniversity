function accountBalance(input){
    let index = 0;
    let money = input[index];
    index++;

    let sum = 0;

    while(money !== "NoMoreMoney"){
        let payment = Number(money);
        if (payment >= 0){
            console.log(`Increase: ${payment.toFixed(2)}`);

            money = input[index];
            index++
        } else {
            console.log("Invalid operation!");
            break;
        }

        sum += payment;
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])
