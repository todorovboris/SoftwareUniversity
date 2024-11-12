function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = new Set(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);
        const validSuits = {
            C: '\u2663',
            D: '\u2666',
            H: '\u2665',
            S: '\u2660',
        };

        if (!validFaces.has(face) || !validSuits.hasOwnProperty(suit)) {
            throw new Error('Invalid face');
        }

        return {
            face,
            suit,
            toString() {
                return this.face + validSuits[this.suit];
            },
        };
    }

    let result = [];

    for (const card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);

        try {
            result.push(createCard(face, suit));
        } catch (err) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
