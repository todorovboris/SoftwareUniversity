function solve(arr) {
    const regex = /([#|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)\1/g;
    let string = arr[0];

    let totalCals = 0;
    let items = [];

    let match = regex.exec(string);
    while (match) {
        let itemName = match.groups.item;
        let expDate = match.groups.date;
        let calories = Number(match.groups.cals);

        totalCals += calories;

        items.push(`Item: ${itemName}, Best before: ${expDate}, Nutrition: ${calories}`);

        match = regex.exec(string);
    }

    let days = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(items.join('\n'));
}

solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
