function smallestNumber(x,y,z){
    let smallest = 0;

    if (x < y && x < z){
        smallest = x;
    } else if (y < x && y < z){
        smallest = y;
    } else if (z < x && z < y){
        smallest = z;
    } else if (x = y = z){
        smallest = x;
    }

    console.log(smallest);

}

// smallestNumber(2,5,3);
// smallestNumber(600,342,123);
smallestNumber(2,2,2);