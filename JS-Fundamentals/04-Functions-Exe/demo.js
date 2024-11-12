function powTheNumber(a){
    return Math.pow(a,2);
}

function whatIsTheNumber(num){
    console.log(`Original number is: ` + num);

    const finalNum = powTheNumber(num);
    console.log(finalNum);
}


// whatIsTheNumber(3);
// whatIsTheNumber(5);
// whatIsTheNumber(12);
whatIsTheNumber(15);
