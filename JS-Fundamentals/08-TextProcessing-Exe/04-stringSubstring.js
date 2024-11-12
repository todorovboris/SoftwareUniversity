function stringSubstring(word, str) {
    let textLowerCase = str.toLowerCase().split(' ');

    if (textLowerCase.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

// stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');
