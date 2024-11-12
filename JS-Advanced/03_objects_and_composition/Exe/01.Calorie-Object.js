function solve(arr) {
    const result = {};

    for (let i = 0; i < arr.length; i += 2) {
        const name = arr[i];
        const number = Number(arr[i + 1]);

        result[name] = number;
    }

    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
