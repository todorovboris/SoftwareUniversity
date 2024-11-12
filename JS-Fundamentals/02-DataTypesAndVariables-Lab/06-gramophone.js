function lab02(band, album, song){
    let duration = (album.length * band.length) * song.length / 2;
    let rotations = duration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

lab02('Black Sabbath', 'Paranoid','War Pigs');