function lab(arr) {
    let map = new Map();

    for (const word of arr) {
        let wordOccur = 1;
        if (map.has(word)) {
            wordOccur += map.get(word);
        }

        map.set(word, wordOccur);
    }

    let sortedOccurs = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    for (const occurs of sortedOccurs) {
        console.log(`${occurs[0]} -> ${occurs[1]} times`);
    }
}

lab(['Here', 'is', 'the', 'first', 'sentence', 'Here', 'is', 'another', 'sentence', 'And', 'finally', 'the', 'third', 'sentence']);
// lab(['dog', 'bye', 'city', 'dog', 'dad', 'boys', 'ginger']);
