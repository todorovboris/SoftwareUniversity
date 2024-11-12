function loadingBar(input){
    let barLoading = "[";

    function sumBarLoading(percent){
        let percentSymbols = percent / 10;
        let dotsSymbols = 10 - percentSymbols;

        for(let i = 1; i <= percentSymbols; i++){
            barLoading += '%';
        }

        for(let j = 1; j <= dotsSymbols; j++){
            barLoading += '.';
        }

        let finalBar = barLoading + ']';
        // console.log(finalBar);

        return finalBar;
    }

    const resultBar = sumBarLoading(input);


    if (input === 100){
        console.log('100% Complete!');
        console.log(resultBar);
    } else {
        console.log(`${input}% ${resultBar}`);
        console.log(`Still loading...`);
    }

}

loadingBar(30);
console.log('--------------');
loadingBar(50);
console.log('--------------');
loadingBar(100);