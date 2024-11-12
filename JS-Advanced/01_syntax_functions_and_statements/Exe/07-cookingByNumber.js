function exe(numStr, oper1, oper2, oper3, oper4, oper5) {
    let num = Number(numStr);
    let operations = [oper1, oper2, oper3, oper4, oper5];

    let operationObj = {
        chop: (a) => a / 2,
        dice: (a) => Math.sqrt(a),
        spice: (a) => a + 1,
        bake: (a) => a * 3,
        fillet: (a) => a * 0.8,
    };

    operations.forEach((op) => {
        num = operationObj[op](num);
        console.log(num);
    });
}

exe('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
