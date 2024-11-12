function lab02(input){
    console.log(typeof input);

    if (typeof input === "string" || typeof input === "number"){
        console.log(input);
    } else {
        console.log("Parameter is not suitable for printing");
    }
}

// lab02('Hello, JavaScript!');
// lab02(18);
lab02(null);