function towns(townInfo) {
    for (const tuples of townInfo) {
        let param = tuples.split(' | ');
        const town = param[0];
        const latitude = Number(param[1]);
        const longitude = Number(param[2]);

        const myTown = {};
        myTown.town = town;
        myTown.latitude = latitude.toFixed(2);
        myTown.longitude = longitude.toFixed(2);

        console.log(myTown);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
