function solve(words, text) {
    const targetWords = words.split(', ');
    const textArr = text.split(' ');

    const templatesArr = textArr.filter((word) => word.includes('*'));

    for (const template of templatesArr) {
        const correctWord = targetWords.find((word) => word.length === template.length);
        text = text.replace(template, correctWord);
    }
    console.log(text);
    // console.log(targetWords);
    // console.log(textArr);
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');
