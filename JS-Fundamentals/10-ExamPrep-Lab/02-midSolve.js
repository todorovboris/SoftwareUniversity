function solve(arr) {
    let list = arr.shift().split('!');

    for (const command of arr) {
        if (command === 'Go Shopping!') {
            break;
        }

        let action = command.split(' ')[0];
        if (action === 'Urgent') {
            let item = command.split(' ')[1];
            if (!list.includes(item)) {
                list.unshift(item);
            }
        }

        if (action === 'Unnecessary') {
            let item = command.split(' ')[1];
            let itemIndex = list.indexOf(item);
            if (itemIndex !== -1) {
                list.splice(itemIndex, 1);
            }
        }

        if (action === 'Correct') {
            let oldItem = command.split(' ')[1];
            let newItem = command.split(' ')[2];
            let oldItemIndex = list.indexOf(oldItem);
            if (oldItemIndex !== -1) {
                list.splice(oldItemIndex, 1, newItem);
            }
        }

        if (action === 'Rearrange') {
            let item = command.split(' ')[1];
            let itemIndex = list.indexOf(item);
            if (itemIndex !== -1) {
                list.splice(itemIndex, 1);
                list.push(item);
            }
        }
    }

    console.log(list.join(', '));
}

// solve(['Tomatoes!Potatoes!Bread', 'Unnecessary Milk', 'Urgent Tomatoes', 'Go Shopping!']);
solve([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!',
]);
