function passwordValidation(input){

    function checkLength(checkPass){
        if (checkPass.length >= 6 && checkPass.length <= 10){
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;        }
    }

    function checkForLettersAndDigits(checkPass){
        const pattern = /^[A-Za-z0-9]+$/;
        if (pattern.test(checkPass)){
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function checkForTwoDigits(checkPass){
        const pattern = /[0-9]{2,}/;
        if (pattern.test(checkPass)){
            return true
        } else {
            console.log("Password must have at least 2 digits");
            return false
        }
    }

    const isValidLength = checkLength(input);
    const isValidChars = checkForLettersAndDigits(input);
    const isWithTwoDigits = checkForTwoDigits(input);

    if (isValidChars && isValidLength && isWithTwoDigits){
        console.log("Password is valid");
    }
}

// passwordValidation('logIn');
// passwordValidation('MyPass123');
passwordValidation('Pa$s$s');