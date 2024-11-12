// function solve(messages) {
//     const input = messages[0];
//     const regex = /([*^]+)(?<name>[a-zA-Z\s]{6,})\1[^a-zA-Z0-9]*\+([-+]?\d{1,3}(?:\.\d+)?),([-+]?\d{1,3}(?:\.\d+)?)\+/g;
//     let match;
//     let foundAny = false;

//     // let match = input.match(regex);
//     // console.log(match);

//     while ((match = regex.exec(input)) !== null) {
//         const artifactName = match[2].trim();
//         const coordinates = `${match[3]},${match[4]}`;

//         console.log(`Found ${artifactName} at coordinates ${coordinates}.`);
//         foundAny = true;
//     }

//     if (!foundAny) {
//         console.log('No valid artifacts found.');
//     }
// }

// // Test the function with the given input
// solve(['*Lost Crown*+++34.807,-40.479+++^Ancient Sword^++++48.8566,2.3522++++*Golden Statue*!!!+12.492,99.901+!!!*Lost Crown*+++34.807,-40.479+']);

function findArtifacts(messages) {
    const input = messages[0];
    const artifactRegex = /([*^]+)(?<name>[a-zA-Z\s]{6,})\1[^a-zA-Z0-9]*\+([-+]?\d{1,3}(?:\.\d+)?),([-+]?\d{1,3}(?:\.\d+)?)\+/g;
    let match;
    let foundAny = false;

    while ((match = artifactRegex.exec(input)) !== null) {
        const artifactName = match[2].trim();
        const coordinates = `${match[3]},${match[4]}`;

        console.log(`Found ${artifactName} at coordinates ${coordinates}.`);
        foundAny = true;
    }

    if (!foundAny) {
        console.log('No valid artifacts found.');
    }
}

findArtifacts(['*Lost Crown*+++34.807,-40.479+++^Ancient Sword^++++48.8566,2.3522++++*Golden Statue*!!!+12.492,99.901+!!!*Lost Crown*+++34.807,-40.479+']);
