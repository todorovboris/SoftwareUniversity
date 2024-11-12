function solve(input) {
    const regex = /([@|#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let countMirrors = 0;
    let mirrorWords = {};
    let mirrorArr = [];

    let matches = input[0].match(regex);
    if (!matches) {
        console.log('No word pairs found!');
    } else {
        console.log(`${matches.length} word pairs found!`);
        for (const match of matches) {
            let firstWord = match.slice(1, match.length / 2 - 1);
            let secondWord = match.slice(match.length / 2 + 1, match.length - 1);

            let secondWordRveresed = secondWord.split('').reverse().join('');
            if (firstWord === secondWordRveresed) {
                countMirrors++;
                // mirrorWords[firstWord] = secondWord;
                mirrorArr.push(`${firstWord} <=> ${secondWord}`);
            }
            // console.log(firstWord + ' - ' + secondWord);
        }
    }

    if (countMirrors <= 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorArr.join(', '));
    }
}

solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
