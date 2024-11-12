function repeatString(str,n){
    let result = "";

    for(let i = 1; i <= n; i++){
        result += str;
    }

    console.log(result);
}

repeatString("abc", 3);
repeatString("String", 2);