function minerTask(arr) {
    let resourcesMap = new Map();

    for (let i = 0; i < arr.length; i += 2) {
        const resource = arr[i];
        const quantity = Number(arr[i + 1]);

        // if (resource in resourcesMap) {
        //     resourcesMap[resource] += quantity;
        // } else {
        //     resourcesMap[resource] = quantity;
        // }

        if (resourcesMap.has(resource)) {
            resourcesMap[resource] += quantity;
        } else {
            resourcesMap[resource] = quantity;
        }

        // if (!resourcesMap.has(resource)) {
        //     resourcesMap.set(resource, quantity);
        // } else {
        //     let currQty = resourcesMap.get(resource);
        //     let newQty = (currQty += quantity);
        //     resourcesMap.set(resource, newQty);
        // }
    }

    for (const [resrce, qty] of resourcesMap) {
        console.log(`${resrce} -> ${qty}`);
    }
}

// minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
