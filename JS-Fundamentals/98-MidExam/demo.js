function managePlaylist(input) {
    let playlist = input[0].split(' ');
    let numberOfCommands = parseInt(input[1], 10);
    let output = [];

    for (let i = 2; i < 2 + numberOfCommands; i++) {
        let commandParts = input[i].split(' * ');
        let command = commandParts[0];

        if (command === 'Add Song') {
            let song = commandParts[1];
            if (!playlist.includes(song)) {
                playlist.push(song);
                output.push(`${song} successfully added`);
            }
        } else if (command === 'Delete Song') {
            let numberOfSongs = parseInt(commandParts[1], 10);
            if (numberOfSongs <= playlist.length) {
                let removedSongs = playlist.splice(0, numberOfSongs);
                output.push(`${removedSongs.join(', ')} deleted`);
            }
        } else if (command === 'Shuffle Songs') {
            let index1 = parseInt(commandParts[1], 10);
            let index2 = parseInt(commandParts[2], 10);
            if (
                index1 >= 0 &&
                index1 < playlist.length &&
                index2 >= 0 &&
                index2 < playlist.length
            ) {
                let temp = playlist[index1];
                playlist[index1] = playlist[index2];
                playlist[index2] = temp;
                output.push(
                    `${playlist[index1]} is swapped with ${playlist[index2]}`
                );
            }
        } else if (command === 'Insert') {
            let song = commandParts[1];
            let index = parseInt(commandParts[2], 10);
            if (index >= 0 && index < playlist.length) {
                if (!playlist.includes(song)) {
                    playlist.splice(index, 0, song);
                    output.push(`${song} successfully inserted`);
                } else {
                    output.push('Song is already in the playlist');
                }
            } else {
                output.push('Index out of range');
            }
        } else if (command === 'Sort') {
            playlist.sort((a, b) => b.localeCompare(a));
        } else if (command === 'Play') {
            output.push('Songs to Play:');
            output.push(...playlist);
        }
    }

    console.log(output.join('\n'));
}

managePlaylist();
managePlaylist();
