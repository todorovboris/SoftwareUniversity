function stringOccur(text, word) {
    let count = 0;

    let textArr = text.split(' ');
    for (const ch of textArr) {
        if (ch === word) {
            count++;
        }
    }

    console.log(count);
}

// stringOccur('This is a word and it also is a sentence', 'is');
stringOccur('softuni is great place for learning new programming languages', 'softuni');
