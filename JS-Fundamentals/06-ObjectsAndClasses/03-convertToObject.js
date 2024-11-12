function convert(jsonText) {
    let jsonObj = JSON.parse(jsonText);
    // console.log(jsonObj);

    const keys = Object.keys(jsonObj);
    // console.log(keys);

    for (const key of keys) {
        let value = jsonObj[key];
        console.log(`${key}: ${value}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');
