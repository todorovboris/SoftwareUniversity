function arrayManipulations(arr){
    let numbers = arr.shift().split(' ').map(Number);

    for(let action of arr){
        const tempArr = action.split(' ');
        const num = Number(tempArr[1]);
        const index = Number(tempArr[2]);
        let command = tempArr.shift().split(' ');
        // console.log(command);
        
        if(command[0] === 'Add'){
            numbers.push(num);
        } else if (command[0] === 'Remove'){
            numbers = numbers.filter(el => el !== num);
        } else if (command[0] === 'RemoveAt'){
            numbers.splice(num, 1);
        } else if (command[0] === 'Insert'){
            numbers.splice(index,0,num)
        }
    }

    console.log(numbers.join(' '));

}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);