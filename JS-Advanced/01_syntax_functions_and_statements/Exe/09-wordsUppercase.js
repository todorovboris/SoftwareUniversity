function exe(str) {
    const regex = /[A-Za-z0-9]+/gm;
    let matches = str.match(regex);

    // console.log(matches);

    matches = matches.map((el) => el.toUpperCase());
    console.log(matches.join(', '));
}

exe('Hi, how are you?');
