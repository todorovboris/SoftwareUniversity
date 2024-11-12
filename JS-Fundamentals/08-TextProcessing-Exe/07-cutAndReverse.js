function solve(text) {
    const firstHalf = text.substring(0, text.length / 2);
    const secondHalf = text.substring(text.length / 2);

    let firstHalfReversed = '';
    let secondHalfReversed = '';

    for (let i = firstHalf.length - 1; i >= 0; i--) {
        firstHalfReversed += firstHalf[i];
    }

    for (let i = secondHalf.length - 1; i >= 0; i--) {
        secondHalfReversed += secondHalf[i];
    }

    console.log(firstHalfReversed);
    console.log(secondHalfReversed);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('------------');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
