function problem03(arr) {
    let playlist = arr.shift().split(' ');
    let countCommands = arr.shift();
    // console.log(playlist);

    for (let action of arr) {
        let command = action.split(' * ');

        if (command.includes('Add Song')) {
            const song = command[1];
            if (!playlist.includes(song)) {
                playlist.push(song);
                console.log(`${song} successfully added`);
            }
        } else if (command.includes('Delete Song')) {
            const songsToDelete = Number(command[1]);

            if (playlist.length >= songsToDelete) {
                let deleteSongs = playlist.splice(0, songsToDelete);
                console.log(`${deleteSongs.join(', ')} deleted`);
            }

            // if (playlist.length >= songsToDelete) {
            //     const tempArr = [];
            //     for (let i = 1; i <= songsToDelete; i++) {
            //         tempArr.push(playlist[i - 1]);
            //     }

            //     if (tempArr.length > 0) {
            //         console.log(`${tempArr.join(', ')} deleted`);
            //     }
            //     playlist.splice(0, songsToDelete);
            // }
        } else if (command.includes('Shuffle Songs')) {
            const index1 = Number(command[1]);
            const index2 = Number(command[2]);
            let maxIndex = Math.max(index1, index2);

            if (playlist.length > maxIndex) {
                [playlist[index1], playlist[index2]] = [
                    playlist[index2],
                    playlist[index1],
                ];
                console.log(
                    `${playlist[index1]} is swapped with ${playlist[index2]}`
                );
            }
        } else if (command.includes('Insert')) {
            const song = command[1];
            const index = Number(command[2]);

            if (playlist.length > index && !playlist.includes(song)) {
                playlist.splice(index, 0, song);
                console.log(`${song} successfully inserted`);
            } else if (playlist.length <= index) {
                console.log(`Index out of range`);
            } else if (
                playlist.length >= index + 1 &&
                playlist.includes(song)
            ) {
                console.log(`Song is already in the playlist`);
            }
        }
    }
    // console.log(playlist);
    console.log(`Songs to Play:`);
    const playlistSorted = playlist.sort((a, b) => b.localeCompare(a));
    console.log(playlistSorted.join('\n'));
}

// problem03([
//     'Imagine BadGuy BohemianRhapsody BlindingLights',
//     '7',
//     // 'Insert * BadGuy * 3',
//     // 'Insert * RollingInTheDeep * 4',
//     'Shuffle Songs * 0 * 2',
//     'Sort',
//     'Play',
// ]);
problem03([
    'Imagine BadGuy BohemianRhapsody BlindingLights',
    '6',
    'Add Song * ShapeOfYou',
    'Delete Song * 2',
    'Shuffle Songs * 0 * 3',
    'Insert * RollingInTheDeep * 1',
    'Sort',
    'Play',
]);
// problem03([
//     'BlindingLights RollingInTheDeep ShapeOfYou',
//     '7',
//     'Add Song * LetItBe',
//     'Add Song * LetItBe',
//     'Delete Song * 1',
//     'Shuffle Songs * 1 * 2',
//     'Insert * BohemianRhapsody * 0',
//     'Insert * BohemianRhapsody * 0',
//     'Add Song * BohemianRhapsody',
//     'Add Song * BohemianRhapsody',
//     'Sort',
//     'Play',
// ]);
