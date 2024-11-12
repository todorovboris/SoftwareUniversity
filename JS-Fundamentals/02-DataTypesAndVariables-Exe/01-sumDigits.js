function exe02(num){
    let numText = `${num}`;
    let sum = 0;

    for(i=0; i < numText.length; i++){
        sum += Number(numText[i]);
    }

    console.log(sum);
}

exe02(245678);
exe02(97561);