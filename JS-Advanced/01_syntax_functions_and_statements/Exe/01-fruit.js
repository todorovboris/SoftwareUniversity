function exe(fruit, weightInGrams, price) {
    let weightInKg = weightInGrams / 1000;
    let totalPrice = weightInKg * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

exe('apple', 1563, 2.35);
