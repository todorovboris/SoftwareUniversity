function legendaryFarming(str) {
    const keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    const junkMaterials = {};
    const legendaryMaterials = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };

    let actionsArr = str.toLowerCase().split(' ');

    for (let i = 0; i < actionsArr.length; i += 2) {
        const qty = Number(actionsArr[i]);
        const material = actionsArr[i + 1];

        if (material in keyMaterials) {
            keyMaterials[material] += qty;

            if (keyMaterials[material] >= 250) {
                keyMaterials[material] -= 250;
                const legendaryItem = legendaryMaterials[material];
                console.log(`${legendaryItem} obtained!`);
                break;
            }
        } else if (material in junkMaterials) {
            junkMaterials[material] += qty;
        } else {
            junkMaterials[material] = qty;
        }
    }

    let keySorted = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    // console.log(keySorted);
    for (const [material, quantity] of keySorted) {
        console.log(`${material}: ${quantity}`);
    }
    let junkSorted = Object.entries(junkMaterials).sort();
    for (const [material, quantity] of junkSorted) {
        console.log(`${material}: ${quantity}`);
    }
    // console.log(junkSorted);
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
