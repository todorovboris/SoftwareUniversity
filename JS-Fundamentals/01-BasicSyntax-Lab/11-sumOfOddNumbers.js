function lab01(n){
    let num = 1;
    let sum = 0;

    for (i = 1; i<= n; i++){
        console.log(num);
        sum += num;
        num += 2;
    }
    
    console.log(`Sum: ${sum}`);
}

lab01(5);
console.log("---------");
lab01(3);