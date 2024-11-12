function smallestNumbers(arr){

    function numbsAscOrder(numsOrder){
        const result = numsOrder.sort((a, b) => a - b);
        return result;
    }

    const smallestNumbers = numbsAscOrder(arr);
    console.log(smallestNumbers.slice(0,2).join(' '));

}

smallestNumbers([30, 15, 50, 5]);
smallestNumbers([3, 0, 10, 4, 7, 3]);