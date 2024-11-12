function solve(input) {
    let heroes = [];

    for (let data of input) {
        let [name, level, items] = data.split(' / ');

        items = items ? items.split(', ') : [];

        let hero = {
            name: name,
            level: Number(level),
            items: items,
        };

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
    // console.log(heroes);
}

solve(['Jake / 1000 / Gauss, HolidayGrenade']);
