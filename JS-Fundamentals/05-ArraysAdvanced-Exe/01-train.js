function train(arr){
    let wagonsArr = arr.shift().split(' ').map(Number);
    let capacity = arr.shift();
    
    for(let command of arr){
        const tempArr = command.split(' ');

        if(command.includes("Add")){
            wagonsArr.push(Number(tempArr[1]));
        } else {
            const passangers = Number(tempArr[0]);

            for(let i = 0; i < wagonsArr.length; i++){
                if(wagonsArr[i] + passangers <= capacity){
                    wagonsArr[i] += passangers
                    break;
                }
            }
        }
    }

    console.log(wagonsArr.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);