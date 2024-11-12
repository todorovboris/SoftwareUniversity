function cardGame(arr) {
    const result = {};

    arr.forEach((item) => {
        const [name, cardsArr] = item.split(': ');
        let cards = cardsArr.split(', ');

        if (!result[name]) {
            result[name] = new Set();
        }

        cards.forEach((card) => {
            result[name].add(card);
        });
    });

    for (const resultKey in result) {
        const powerObj = {
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            J: 11,
            Q: 12,
            K: 13,
            A: 14,
        };

        const typeObj = {
            C: 1,
            D: 2,
            H: 3,
            S: 4,
        };

        const duosArr = result[resultKey];
        let sum = 0;

        duosArr.forEach((duo) => {
            let power = duo[0];
            let type = duo[1];

            if (Number(duo[0]) === 1) {
                power = duo[0].toString() + duo[1].toString();
                type = duo[2];
            }

            sum += powerObj[power] * typeObj[type];
        });

        console.log(`${resultKey}: ${sum}`);
    }
}
