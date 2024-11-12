function exe(numsOriginal){

    let numsModif = [];
    let sumOriginal = 0;
    let sumModif = 0;

    for(let i = 0; i < numsOriginal.length; i++){
        sumOriginal += numsOriginal[i];
        
        if (numsOriginal[i] % 2 === 0){
            numsModif.push(numsOriginal[i] + i);
            sumModif += numsModif[i];
        } else {
            numsModif.push(numsOriginal[i] - i);
            sumModif += numsModif[i];
        }

    }

    console.log(numsModif);
    console.log(sumOriginal);
    console.log(sumModif);

}

// exe([5, 15, 23, 56, 35]);
exe([-5, 11, 3, 0, 2]);