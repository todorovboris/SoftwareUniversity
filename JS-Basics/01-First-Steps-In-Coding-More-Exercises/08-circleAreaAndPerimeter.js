function circleAreaAndPerimeter(input){
    let r = Number(input[0]);

    let area = Math.PI * r * r;
    let parameter = 2 * Math.PI * r;


    console.log(area.toFixed(2));
    console.log(parameter.toFixed(2));


}

circleAreaAndPerimeter("4.5")