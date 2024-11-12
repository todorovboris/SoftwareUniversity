function solve(phoneArr) {
    const regex = /[+]359([- ])(2)\1(\d{3})\1(\d{4})\b/g;

    let phones = phoneArr[0].match(regex);
    console.log(phones.join(', '));
    // for (const phone of phones) {
    //     console.log(phone);
    // }
}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
