function AreaофFigures(input){

    let figure = input[0];
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);

    let sum = 0;

    if (figure === "square"){
        sum = num1 * num1;
    } else if (figure === "rectangle"){
        sum = num1 * num2;
    } else if (figure === "circle"){
        sum = Math.PI * num1 * num1;
    } else if (figure === "triangle"){
        sum = num1 * num2 / 2;
    }

    console.log(sum.toFixed(3));


}

AreaофFigures(["circle", "6"]);