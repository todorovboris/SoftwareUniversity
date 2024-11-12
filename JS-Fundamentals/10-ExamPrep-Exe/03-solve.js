function solve(arr) {
    let citiesData = {};

    // stage1: target cities:
    let command = arr.shift();
    while (command !== 'Sail') {
        let tokens = command.split('||');
        let cityName = tokens.shift();
        let cityPopulation = Number(tokens.shift());
        let cityGold = Number(tokens.shift());

        if (cityName in citiesData) {
            citiesData[cityName].population += cityPopulation;
            citiesData[cityName].gold += cityGold;
        } else {
            citiesData[cityName] = { population: cityPopulation, gold: cityGold };
        }

        command = arr.shift();
    }

    // stage 2: attack
    command = arr.shift();
    while (command !== 'End') {
        let tokens = command.split('=>');
        let action = tokens.shift();
        let cityName = tokens.shift();

        if (action === 'Plunder') {
            let peopleKilled = Number(tokens.shift());
            let goldStolen = Number(tokens.shift());

            citiesData[cityName].population -= peopleKilled;
            citiesData[cityName].gold -= goldStolen;

            console.log(`${cityName} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

            if (citiesData[cityName].gold <= 0 || citiesData[cityName].population <= 0) {
                console.log(`${cityName} has been wiped off the map!`);
                delete citiesData[cityName];
            }
        } else if (action === 'Prosper') {
            let goldAcquired = Number(tokens.shift());
            if (goldAcquired < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                citiesData[cityName].gold += goldAcquired;
                console.log(`${goldAcquired} gold added to the city treasury. ${cityName} now has ${citiesData[cityName].gold} gold.`);
            }
        }

        command = arr.shift();
    }

    let citiesEntries = Object.entries(citiesData);
    if (citiesEntries.length < 1) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${citiesEntries.length} wealthy settlements to go to:`);

        for (let [cityName, cityStats] of citiesEntries) {
            console.log(`${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`);
        }
    }
}

solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End',
]);
// solve([
//     'Nassau||95000||1000',
//     'San Juan||930000||1250',
//     'Campeche||270000||690',
//     'Port Royal||320000||1000',
//     'Port Royal||100000||2000',
//     'Sail',
//     'Prosper=>Port Royal=>-200',
//     'Plunder=>Nassau=>94000=>750',
//     'Plunder=>Nassau=>1000=>150',
//     'Plunder=>Campeche=>150000=>690',
//     'End',
// ]);
