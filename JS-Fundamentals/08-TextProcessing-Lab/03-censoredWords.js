function censoredWords(str, word) {
    let censored = '*'.repeat(word.length);

    let result = str.replace(word, censored);
    while (result.includes(word)) {
        result = result.replace(word, censored);
    }

    console.log(result);
}

censoredWords('A small small sentence with some words', 'small');
// censoredWords('Find the hidden word', 'hidden');
