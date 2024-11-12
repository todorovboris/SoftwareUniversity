function lab(city) {
    const keys = Object.keys(city);

    for (const key of keys) {
        const values = city[key];

        console.log(`${key} -> ${values}`);
    }
}

lab({
    name: 'Plovdiv',
    area: 389,
    population: 1162358,
    country: 'Bulgaria',
    postCode: '4000',
});
