function solve(arr) {
    const nameRegex = /[A-Za-z]/g;
    const distanceRegex = /\d/g;

    const names = arr.shift().split(', ');
    let racers = {};
    names.forEach((name) => (racers[name] = 0));

    let command = arr.shift();
    while (command !== 'end of race') {
        let distance = 0;
        let name = command.match(nameRegex).join('');
        let digits = command.match(distanceRegex).map(Number);
        for (const digit of digits) {
            distance += digit;
        }

        if (name in racers) {
            racers[name] += distance;
        }

        command = arr.shift();
    }

    let racersSorted = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${racersSorted[0][0]}`);
    console.log(`2nd place: ${racersSorted[1][0]}`);
    console.log(`3rd place: ${racersSorted[2][0]}`);
}

solve([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race',
]);
