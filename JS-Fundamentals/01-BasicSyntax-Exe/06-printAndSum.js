function exe01(start, end){
    let sum = 0;
    let text = '';

    for(let i = start; i <= end; i++){
        sum += i;
        text += i + ' ';
    }

    console.log(text);
    console.log(`Sum: ${sum}`);
}

exe01(5, 10);
