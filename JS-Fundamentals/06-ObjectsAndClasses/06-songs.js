function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const countOfSongs = arr.shift();
    const typeOfSongs = arr.pop();
    let songsArr = [];

    for (const songParts of arr) {
        const part = songParts.split('_');
        // console.log(part);

        const type = part[0];
        const name = part[1];
        const time = part[2];

        let song = new Song(type, name, time);

        if (typeOfSongs === 'all' || typeOfSongs === type) {
            songsArr.push(name);
        }

        // console.log(songsArr);

        // songsArr.push(song);
        // console.log(song);
    }

    for (const songToPlay of songsArr) {
        console.log(songToPlay);
    }
}

// songs([
//     3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite',
// ]);
// songs([
//     4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater',
// ]);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
