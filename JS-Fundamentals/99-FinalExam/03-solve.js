function solve(arr) {
    let botanicalGarden = {};
    let sections = {};

    let command = arr.shift();
    while (command !== 'EndDay') {
        let tokens = command.split(' ');
        let action = tokens[0];
        let flowerInfo = tokens[1].split('-');
        let flowerName = flowerInfo[0];
        let flowerSection = flowerInfo[2];

        // sections[flowerSection] = 0;

        if (action === 'Plant:') {
            let waterNeeded = Number(flowerInfo[1]);

            if (flowerName in botanicalGarden) {
                botanicalGarden[flowerName].water += waterNeeded;
            } else {
                botanicalGarden[flowerName] = { water: waterNeeded, section: flowerSection };
                sections[flowerSection] += 1;
            }
        } else if (action === 'Water:') {
            let waterAmount = Number(flowerInfo[1]);

            if (flowerName in botanicalGarden) {
                botanicalGarden[flowerName].water -= waterAmount;
                if (botanicalGarden[flowerName].water <= 0) {
                    console.log(`${flowerName} has been sufficiently watered.`);
                    delete botanicalGarden[flowerName];
                    sections[flowerSection]--;
                }
            }
        }
        command = arr.shift();
    }

    let botanicalGardenEntries = Object.entries(botanicalGarden);
    console.log('Plants needing water:');
    for (const [name, flowerStats] of botanicalGardenEntries) {
        let waterLeft = flowerStats.water;
        let finalSection = flowerStats.section;

        if (waterLeft > 0) {
            console.log(` ${name} -> ${waterLeft}ml left`);
        }
    }

    console.log('Sections with thirsty plants:');
    let sectionsEntries = Object.entries(sections);
    for (const section of sectionsEntries) {
        let count = section[1];
        let sectionName = section[0];

        if (count >= 1) {
            console.log(` ${sectionName}: ${count}`);
        }
    }
}

solve(['Plant: Orchid-300-TropicalZone', 'Plant: Fern-200-FernGully', 'Plant: Orchid-100-TropicalZone', 'Water: Daisy-50', 'Water: Orchid-400', 'EndDay']);
// solve(['Plant: Cactus-150-DesertArea', 'Plant: Bamboo-500-BambooGrove', 'Plant: Cactus-50-DesertArea', 'Water: Cactus-200', 'Water: Bamboo-500', 'EndDay']);
// solve(['Plant: Rose-300-FlowerBed', 'Plant: Tulip-150-FlowerBed', 'Water: Rose-100', 'Water: Tulip-150', 'EndDay']);

// solve([
//     'Plant: Orchid-300-TropicalZone',
//     'Plant: Fern-200-FernGully',
//     'Plant: Orchid-100-TropicalZone',
//     'Plant: Rose-300-FlowerBed',
//     'Plant: Tulip-150-FlowerBed',
//     'Water: Daisy-50',
//     'Water: Orchid-400',
//     'Water: Rose-100',
//     'Water: Tulip-150',
//     'EndDay',
// ]);
