function wordTracker(arr) {
    let wordOccur = {};
    let targetWords = arr.shift().split(' ');

    for (const word of targetWords) {
        wordOccur[word] = 0;
    }

    for (const word of arr) {
        if (word in wordOccur) {
            wordOccur[word]++;
        }
    }

    let wordOccurArr = Object.entries(wordOccur);
    let wordOccurSorted = wordOccurArr.sort((a, b) => b[1] - a[1]);

    for (const [word, occur] of wordOccurSorted) {
        console.log(`${word} - ${occur}`);
    }
}

// wordTracker([
//     'this sentence',
//     'In',
//     'this',
//     'sentence',
//     'you',
//     'have',
//     'to',
//     'count',
//     'the',
//     'occurrences',
//     'of',
//     'the',
//     'words',
//     'this',
//     'and',
//     'sentence',
//     'because',
//     'this',
//     'is',
//     'your',
//     'task',
// ]);

wordTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);
