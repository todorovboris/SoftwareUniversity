function nxnMatrix(number){

    let numberArr = [];
    let numberStr = (number + '')
    
    for(let i = 0; i < number; i++){

        numberArr[i] = number;
        
        
    }
    
    let numArrRepeat = numberArr.join(' ');
    console.log((numArrRepeat + '\n').repeat(number));
    
    for(let j = 0; j < number; j++){

    }
    
    // let numStr = number + '';

    // function repeatChar(num){
    //     let numArr = [];
        
    //     for(let i = 0; i < num; i++){
    //         numArr[i]=num;            
    //     }

    //     return numArr.join(' ');
    // }

    // let chars = repeatChar(number);
    // console.log(chars);
}

// nxnMatrix(3);
nxnMatrix(10);
// nxnMatrix(2);