function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    // пресмятане на стените
    let frontWalls = 2 * x * x;
    let sideWalls = 2 * x * y;
    let bothWalls = frontWalls + sideWalls - (1.2 * 2) - (2 * 1.5 * 1.5);
    
    
    // пресмятане на покривът
    let rectangleRoofs = 2 * x * y;
    let triangleRoofs = 2 * x * h / 2;
    let bothRoofs = rectangleRoofs + triangleRoofs;

    let totalWallsSum = bothWalls / 3.4;
    let totalRoofsSum = bothRoofs / 4.3;

    console.log(totalWallsSum.toFixed(2));
    console.log(totalRoofsSum.toFixed(2));


}

housePainting(['6','10','5.2']);