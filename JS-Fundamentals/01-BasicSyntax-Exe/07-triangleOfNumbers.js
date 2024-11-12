function exe01(n){

    for(let i = 1; i <= n; i++){
        let allNums = '';
        for(let j = 1; j<= i; j++){
            allNums += i + ' ';
        }

        console.log(allNums);
    }
}

exe01(3);