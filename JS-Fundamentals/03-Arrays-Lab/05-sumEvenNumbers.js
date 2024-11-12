function lab(numbers){

    let sum = 0;
    
    for(let i = 0; i<= numbers.length - 1; i++){
        numbers[i]=Number(numbers[i]);

        if (numbers[i] % 2 === 0){
            sum += numbers[i];
        }
    }

    console.log(sum);

}

lab(['1','2','3','4','5','6']);
lab(['3','5','7','9']);