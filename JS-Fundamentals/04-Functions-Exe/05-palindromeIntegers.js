function palindromeIntegers(number){

    function checkIfPalindrome(num){
        let numString = num + '';
        let numReversed = '';

        for(let i=numString.length - 1; i >= 0; i--){
            numReversed += numString[i];
        }

        if (numReversed === numString){
            return true;
        } else {
            return false;
        }
    }


    for(i = 0; i < number.length; i++){
        const isPalindrome = checkIfPalindrome(number[i]);
        console.log(isPalindrome);
    }
}

palindromeIntegers([123,323,421,121]);
// palindromeIntegers([32,2,232,1010]);