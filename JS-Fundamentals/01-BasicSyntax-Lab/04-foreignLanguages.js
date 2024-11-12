function lab01(country){

    switch(country){
        case "England":
        case "USA":
            console.log("English");
        break;

        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
        break;

        default:
            console.log("unknown");
        break;
    }
}

lab01("Mexico");
lab01("Bulgaria");