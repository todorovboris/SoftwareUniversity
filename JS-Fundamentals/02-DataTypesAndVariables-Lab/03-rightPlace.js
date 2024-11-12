function lab02(str,char,result){
    
    let text = '';
    for (i=0; i < str.length; i++){
        if (str[i] !== "_" ){
            text += str[i];
        } else {
            text += char;
        }
    }

    // let text = str.replace("_",char)

    if (text === result){
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}

lab02('Str_ng','I','Strong');
lab02('Str_ng','i','String');