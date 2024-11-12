function sumNumbers(input){
    let n = Number(input[0]);

    let index = 1;
    let num = Number(input[index]);
    index++;

    sum = 0;

    while(sum < n){
        sum += num;

        num = Number(input[index]);
        index++;
    }

    console.log(sum);
}

sumNumbers(["100",
"10",
"20",
"30",
"40"])
