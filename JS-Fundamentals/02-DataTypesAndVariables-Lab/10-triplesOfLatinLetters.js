function lab02(n){

    for (i=0;i<n;i++){
        for (j=0;j<n;j++){
            for (k=0;k<n;k++){
                let letterFirst=String.fromCharCode(97+i);
                let letterSecond=String.fromCharCode(97+j);
                let letterThird=String.fromCharCode(97+k);

                console.log(letterFirst+letterSecond+letterThird);
            }
        }
    }
}

lab02('3');

