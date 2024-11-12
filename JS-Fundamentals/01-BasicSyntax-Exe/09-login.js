function exe01(input){
    let username = input[0];
    let pass = '';
    let length = (username.length - 1);
    let countTry = 0;

    for (let i = length; i >= 0; i--){
        pass += username[i];
    }

    index = 1;
    while(input[index] !== pass){
        countTry++;
        if (countTry === 4){
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log(`Incorrect password. Try again.`);
        index++;
    }

    if (countTry < 4){
        console.log(`User ${username} logged in.`);
    }
}

exe01(['sunny','rainy','cloudy','sunny','not sunny']);
