function lab02 (num){


    for (i = 1; i <= num; i++){
        if (i < 10){
            if (i % 5 === 0 || i % 7 === 0){
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
        }

        if (i >= 10){
            let sum = 0;
            let numText = `${i}`;

            for (j = 0; j < numText.length ; j++){
                sum += Number(numText[j]);
            }

            if (sum === 5 || sum === 7 || sum === 11){
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
        }
    }
}

lab02(99);