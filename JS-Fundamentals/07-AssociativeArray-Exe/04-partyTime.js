function partyTime(arr) {
    const guestsVip = [];
    const guestsRegular = [];
    // let partyStarted = false;

    let guest = arr.shift();
    while (guest !== 'PARTY') {
        // console.log(guest.charCodeAt(0)); //проверка дали гостът започва с цифра или не (VIP or Regular)
        if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
            guestsVip.push(guest);
        } else {
            guestsRegular.push(guest);
        }

        guest = arr.shift();
    }

    for (const partyGuest of arr) {
        // console.log(partyGuest);
        if (partyGuest.charCodeAt(0) >= 48 && partyGuest.charCodeAt(0) <= 57) {
            let index = guestsVip.indexOf(partyGuest);
            guestsVip.splice(index, 1);
        } else {
            let index = guestsRegular.indexOf(partyGuest);
            guestsRegular.splice(index, 1);
        }
    }

    // console.log(guestsRegular);
    // console.log(guestsVip);

    let remainingGuests = [...guestsVip, ...guestsRegular];
    console.log(remainingGuests.length);
    for (const guest of remainingGuests) {
        console.log(guest);
    }
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
// partyTime([
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
// ]);
