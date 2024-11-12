function sumFirstAndLast(numsStr){
    const nums = numsStr.map(Number);

    const firstEl = Number(nums.slice(0,1));
    const lastEl = Number(nums.slice(-1));

    const result = firstEl + lastEl;
    console.log(result);
    
}

sumFirstAndLast(['20', '30', '40']);
console.log('------------');
sumFirstAndLast(['5', '10']);