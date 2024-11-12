function ToyShop(input){
    let vacationPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    totalToys = puzzle + dolls + bears + minions + trucks;

    let puzzleSum = puzzle * 2.60;
    let dollsSum = dolls * 3;
    let bearsSum = bears * 4.10;
    let minionsSum = minions * 8.20;
    let trucksSum = trucks * 2;

    let totalSum = puzzleSum + dollsSum + bearsSum + minionsSum + trucksSum;

    if (totalToys >= 50){
        totalSum = totalSum * 0.75;
    }

    totalSum = totalSum * 0.9;
    let diff = Math.abs(totalSum - vacationPrice);
    


    if (totalSum >= vacationPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }   
}



ToyShop(["40.8",

"20",

"25",

"30",

"50",

"10"]);