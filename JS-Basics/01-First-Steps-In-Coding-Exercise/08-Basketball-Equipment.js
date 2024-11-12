function basketballEquipment(input){
    let anualTax = Number(input[0]);

    shoes = 0.6 * anualTax;
    suit = 0.8 * shoes;
    ball = suit / 4;
    accesories = ball / 5;

    expenses = anualTax + shoes + suit + ball + accesories;

    console.log(expenses);
}

basketballEquipment(['550'])