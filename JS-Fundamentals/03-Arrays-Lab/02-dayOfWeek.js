function lab03(num){
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if (num >= 1 && num <= 7){
        console.log(days[num - 1]);
    } else {
        console.log("Invalid day!");
    }
}

lab03(1);