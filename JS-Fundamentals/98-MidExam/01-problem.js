function problem01(input) {
    const daysOfAdventure = input[0];
    const players = input[1];
    let groupsEnergy = input[2];
    let waterPerDayForPerson = input[3];
    let foodPerDayForPerson = input[4];

    let totalWater = daysOfAdventure * players * waterPerDayForPerson;
    let totalFood = daysOfAdventure * players * foodPerDayForPerson;

    for (let currDay = 1; currDay <= daysOfAdventure; currDay++) {
        groupsEnergy -= input[currDay + 4];

        if (groupsEnergy <= 0) {
            break;
        }

        if (currDay % 2 === 0) {
            groupsEnergy = groupsEnergy * 1.05;
            totalWater = totalWater * 0.7;
        }

        if (currDay % 3 === 0) {
            groupsEnergy = groupsEnergy * 1.1;
            totalFood -= totalFood / players;
        }
    }

    if (groupsEnergy > 0) {
        console.log(
            `You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(
                2
            )} energy!`
        );
    } else {
        console.log(
            `You will run out of energy. You will be left with ${totalFood.toFixed(
                2
            )} food and ${totalWater.toFixed(2)} water.`
        );
    }
}

problem01([
    10, 7, 5035.5, 11.3, 7.2, 942.3, 500.57, 520.68, 540.87, 505.99, 630.3,
    784.2, 321.21, 456.8, 330,
]);
// problem01();

// function problem01(arr1, arr2) {
//     const daysOfAdventure = arr1[0];
//     const players = arr1[1];
//     let groupsEnergy = arr1[2];
//     let waterPerDayForPerson = arr1[3];
//     let foodPerDayForPerson = arr1[4];

//     let totalWater = daysOfAdventure * players * waterPerDayForPerson;
//     let totalFood = daysOfAdventure * players * foodPerDayForPerson;

//     for (let currDay = 1; currDay <= daysOfAdventure; currDay++) {
//         groupsEnergy -= arr2[currDay - 1];

//         if (groupsEnergy <= 0) {
//             break;
//         }

//         if (currDay % 2 === 0) {
//             groupsEnergy = groupsEnergy * 1.05;
//             totalWater = totalWater * 0.7;
//         }

//         if (currDay % 3 === 0) {
//             groupsEnergy = groupsEnergy * 1.1;
//             totalFood -= totalFood / players;
//         }
//     }

//     if (groupsEnergy > 0) {
//         console.log(
//             `You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(
//                 2
//             )} energy!`
//         );
//     } else {
//         console.log(
//             `You will run out of energy. You will be left with ${totalFood.toFixed(
//                 2
//             )} food and ${totalWater.toFixed(2)} water.`
//         );
//     }
// }

// problem01(
//     [10, 7, 5035.5, 11.3, 7.2],
//     [942.3, 500.57, 520.68, 540.87, 505.99, 630.3, 784.2, 321.21, 456.8, 330]
// );
// // problem01();
