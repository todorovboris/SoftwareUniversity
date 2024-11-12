function solve(words, text) {
    const targetWords = words.split(', ');
    const textArr = text.split(' ');
    let editText = [];

    for (const part of textArr) {
        if (!part.startsWith('*')) {
            editText.push(part);
        } else {
            for (const word of targetWords) {
                if (word.length === part.length) {
                    editText.push(word);
                }
            }
        }
    }

    console.log(editText.join(' '));
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');
