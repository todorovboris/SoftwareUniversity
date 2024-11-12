function solve(str) {
    let singleText = str[0];

    for (let i = 1; i < str.length; i++) {
        let lastLetter = singleText.substring(singleText.length - 1, singleText.length);

        if (lastLetter !== str[i]) {
            singleText += str[i];
        }
    }

    console.log(singleText);
}

// solve('aaaaabbbbbcdddeeeedssaa');
console.log('------------');
solve('qqqwerqwecccwd');
