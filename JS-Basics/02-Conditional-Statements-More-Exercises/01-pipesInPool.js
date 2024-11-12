function pipesInPool(input){

    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let hoursOfWorkerAbsence = Number(input[3]);

    let totalP = (P1 + P2) * hoursOfWorkerAbsence;
    let diff = Math.abs(V - totalP);
    
    let percentFullnes = totalP / V * 100;
    let P1Fulness = P1 * hoursOfWorkerAbsence / totalP * 100;
    let P2Fulness = P2 * hoursOfWorkerAbsence / totalP * 100;


    if (totalP >= V){
        console.log(`For ${hoursOfWorkerAbsence.toFixed(2)} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    } else {
        console.log(`The pool is ${percentFullnes.toFixed(2)}% full. Pipe 1: ${P1Fulness.toFixed(2)}%. Pipe 2: ${P2Fulness.toFixed(2)}%.`);
    }

}

pipesInPool([100,100,100,2.5]);
