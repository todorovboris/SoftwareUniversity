function charectersInRange(char1, char2){
    const char1Code = char1.charCodeAt();
    const char2Code = char2.charCodeAt();
    let newArr = [];

    let max = Math.max(char1Code, char2Code);
    let min = Math.min(char1Code, char2Code);

    for(let i = min + 1; i < max; i++){
        newArr.push(String.fromCharCode(i));
    }

    console.log(newArr.join(' '));

}

charectersInRange('a', 'd');
// charectersInRange('C', '#');