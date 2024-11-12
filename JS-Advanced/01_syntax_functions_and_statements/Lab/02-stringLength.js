function lab(str1, str2, str3) {
    let sumLength = str1.length + str2.length + str3.length;
    let avgLength = sumLength / 3;

    console.log(sumLength);
    console.log(Math.floor(avgLength));
}

lab('chocolate', 'ice cream', 'cake');
console.log('---------');
lab('pasta', '5', '22.3');
