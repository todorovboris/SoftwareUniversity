function inventory(arr) {
    const herosArr = [];

    for (const heros of arr) {
        const heroObj = {};
        const heroInfo = heros.split(' / ');
        const hero = heroInfo[0];
        const level = Number(heroInfo[1]);
        const items = heroInfo[2];

        // console.log(heroInfo);

        heroObj.Hero = hero;
        heroObj.level = level;
        heroObj.items = items;

        // console.log(heroObj);

        herosArr.push(heroObj);
    }

    let herosArrSorted = herosArr.sort((a, b) => a.level - b.level);
    // console.log(herosArrSorted[0].Hero);

    for (const command of herosArrSorted) {
        console.log(`Hero: ${command.Hero}`);
        console.log(`level => ${command.level}`);
        console.log(`items => ${command.items}`);
    }
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
// inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);
