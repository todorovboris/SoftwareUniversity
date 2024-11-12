function movies(inputs) {
    let movies = [];

    for (const command of inputs) {
        // console.log(iterator);

        if (command.includes('addMovie')) {
            const movieName = command.split('addMovie ');
            movies.push({ name: movieName[1] });
        } else if (command.includes('directedBy')) {
            const movieDirector = command.split(' directedBy ');

            const found = movies.find((found) => found.name === movieDirector[0]);
            if (found) {
                found.director = movieDirector[1];
            }
        } else if (command.includes('onDate')) {
            const movieDate = command.split(' onDate ');

            const found = movies.find((found) => found.name === movieDate[0]);
            if (found) {
                found.date = movieDate[1];
            }
        }
    }

    for (const movieItem of movies) {
        if (movieItem.name && movieItem.director && movieItem.date) {
            console.log(JSON.stringify(movieItem));
        }
    }

    // console.log(movies);
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);

// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo',
// ]);
