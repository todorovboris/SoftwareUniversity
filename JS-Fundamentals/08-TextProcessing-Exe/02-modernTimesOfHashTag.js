function solve(str) {
    const textArr = str.split(' ');
    const regex = /^[A-Za-z]+$/;
    // console.log(textArr);

    for (const word of textArr) {
        if (word.startsWith('#') && word.length >= 2) {
            let validWord = word.substring(1);

            if (regex.test(validWord)) {
                console.log(validWord); //тества дали думата има само главни или малки букви и ако е вярно отпечатва думата
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia #ff789');
console.log('----------------');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
