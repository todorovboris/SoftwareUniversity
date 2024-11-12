function exe(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

exe(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
