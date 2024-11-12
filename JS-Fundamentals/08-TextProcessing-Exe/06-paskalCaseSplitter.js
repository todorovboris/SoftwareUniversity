function solve(str) {
    const regex = /[A-Z][a-z]*/g; //намери ако има повече от 1(g) съвпадение на Главна буква последващо от 0 или повече(*) малки букви
    const allWords = str.matchAll(regex);

    let finalWords = [];

    for (const word of allWords) {
        finalWords.push(word[0]);
    }

    console.log(finalWords.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
