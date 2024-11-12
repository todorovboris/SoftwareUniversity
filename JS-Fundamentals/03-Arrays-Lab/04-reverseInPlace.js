function lab03(arr){
    let arrRev = [];

    for(let i = arr.length - 1; i>= 0; i--){
        arrRev.push(arr[i]);
    }

    console.log(arrRev.join(" "));
}

lab03(['a', 'b', 'c', 'd', 'e']);
lab03(['33', '123', '0', 'dd']);