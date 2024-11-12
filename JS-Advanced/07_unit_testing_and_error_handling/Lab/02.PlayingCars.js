function cards(face, suit) {
    const faces = new Set(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);
    const suits = {
        C: '\u2663',
        D: '\u2666',
        H: '\u2665',
        S: '\u2660',
    };

    if (!faces.has(face)) {
        throw new Error('Invalid face');
    }

    if (!suits.hasOwnProperty(suit)) {
        throw new Error('Invalid suit');
    }

    return {
        face,
        suit,
        toString() {
            return this.face + suits[this.suit];
        },
    };
}

console.log(cards('A', 'S').toString());
console.log(cards('10', 'S').toString());

try {
    console.log(cards('1', 'S').toString());
} catch (err) {
    console.log('Wrong input:', err.message); // връща съобщението, което сме "хвърлили" при проверката => Wrong input: Not a string
}
