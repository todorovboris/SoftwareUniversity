function dictionary(arr) {
    let dictionaryObj = {};

    for (const element of arr) {
        const defsObj = JSON.parse(element);
        // console.log(defsObj);

        for (const key in defsObj) {
            dictionaryObj[key] = defsObj[key];
        }
    }

    let dictionarySorted = Object.keys(dictionaryObj).sort();

    dictionarySorted.forEach((term) => {
        console.log(`Term: ${term} => Definition: ${dictionaryObj[term]}`);
    });

    // console.log(Object.keys(dictionaryObj));
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
