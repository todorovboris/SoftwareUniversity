function tradeCommissions(input){
    let city = input[0];
    sales = Number(input[1]);

    // let discount = 0;

    switch(city){
        case "Sofia":
            if (sales < 0){
                console.log("error");
            } else if (sales <= 500){
                console.log((5 / 100 * sales).toFixed(2));
            } else if (sales <= 1000){
                console.log((7 / 100 * sales).toFixed(2));
            } else if (sales <= 10000){
                console.log((8 / 100 * sales).toFixed(2));
            } else if (sales > 10000){
                console.log((12 / 100 * sales).toFixed(2));
            }
        break;

        case "Varna":
            if (sales < 0){
                console.log("error");
            } else if (sales <= 500){
                console.log((4.5 / 100 * sales).toFixed(2));
            } else if (sales <= 1000){
                console.log((7.5 / 100 * sales).toFixed(2));
            } else if (sales <= 10000){
                console.log((10 / 100 * sales).toFixed(2));
            } else if (sales > 10000){
                console.log((13 / 100 * sales).toFixed(2));
            }
        break;

        case "Plovdiv":
            if (sales < 0){
                console.log("error");
            } else if (sales <= 500){
                console.log((5.5 / 100 * sales).toFixed(2));
            } else if (sales <= 1000){
                console.log((8 / 100 * sales).toFixed(2));
            } else if (sales <= 10000){
                console.log((12 / 100 * sales).toFixed(2));
            } else if (sales > 10000){
                console.log((14.5 / 100 * sales).toFixed(2));
            }
        break;

        default:
            console.log("error");
    }

}

tradeCommissions(["Kaspichan",
"-50"])

