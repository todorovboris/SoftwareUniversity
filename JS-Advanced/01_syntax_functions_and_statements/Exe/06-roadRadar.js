function exe(speed, area) {
    let diff = 0;
    let limit = 0;
    let isFaster = false;
    let stat = '';

    switch (area) {
        case 'motorway':
            limit = 130;
            if (speed > limit) {
                isFaster = true;
                diff = Math.abs(speed - limit);
            }
            break;
        case 'interstate':
            limit = 90;
            if (speed > limit) {
                isFaster = true;
                diff = Math.abs(speed - limit);
            }
            break;
        case 'city':
            limit = 50;
            if (speed > limit) {
                isFaster = true;
                diff = Math.abs(speed - limit);
            }
            break;
        case 'residential':
            limit = 20;
            if (speed > limit) {
                isFaster = true;
                diff = Math.abs(speed - limit);
            }
            break;
    }

    if (isFaster && diff <= 20) {
        stat = 'speeding';
    } else if (isFaster && diff <= 40) {
        stat = 'excessive speeding';
    } else if (isFaster && diff > 40) {
        stat = 'reckless driving';
    }

    if (isFaster) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${stat}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}

exe(200, 'motorway');
