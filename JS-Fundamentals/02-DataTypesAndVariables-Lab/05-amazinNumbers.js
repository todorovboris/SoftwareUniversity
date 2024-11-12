function lab02(num){
    let numText = num + '';
    let sum = 0;

    for (i = 0; i < numText.length; i++){
        sum += Number(numText[i]);
    }

    if (sum % 10 === 9){
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

// lab02(1233);
lab02(583472);