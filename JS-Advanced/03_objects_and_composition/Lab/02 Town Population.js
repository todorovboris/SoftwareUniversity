function solve(townsArr) {
    let towns = {};

    for (const town of townsArr) {
        let [name, population] = town.split(' <-> ');

        if (!towns[name]) {
            towns[name] = 0;
        }

        towns[name] += Number(population);
    }
    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}

solve(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);
