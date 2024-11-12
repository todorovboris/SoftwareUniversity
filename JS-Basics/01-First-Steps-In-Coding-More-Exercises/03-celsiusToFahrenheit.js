function celsiusToFahrenheit(input){

    let celsius = Number(input[0]);

    let fahrenheit = celsius * 1.8000 + 32.00;

    console.log(fahrenheit.toFixed(2));


}


celsiusToFahrenheit(["-5.5"])