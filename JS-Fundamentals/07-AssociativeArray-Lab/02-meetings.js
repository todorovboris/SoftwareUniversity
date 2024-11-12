function meetings(arr) {
    const meetingsObj = {};

    for (const tokens of arr) {
        const info = tokens.split(' ');
        const day = info[0];
        const name = info[1];

        if (meetingsObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meetingsObj) {
        console.log(`${key} -> ${meetingsObj[key]}`);
    }
}

// meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);
