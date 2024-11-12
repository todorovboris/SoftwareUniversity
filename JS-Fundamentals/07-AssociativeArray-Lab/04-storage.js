function lab(arr) {
    let storageMap = new Map();

    for (const line of arr) {
        const info = line.split(' ');
        const product = info[0];
        const quantity = Number(info[1]);

        if (!storageMap.has(product)) {
            storageMap.set(product, quantity);
        } else {
            let currQty = storageMap.get(product);
            let newQty = (currQty += quantity);
            storageMap.set(product, newQty);
        }
    }

    let storageArr = Array.from(storageMap.keys());
    for (const key of storageArr) {
        console.log(`${key} -> ${storageMap.get(key)}`);
    }
    // console.log(storageMap);
}

// lab(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
lab(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);
