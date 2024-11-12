function calc() {
    const num1El = document.getElementById('num1');
    const num2El = document.getElementById('num2');
    let sumEl = Number(num1El.value) + Number(num2El.value);

    let resultEl = document.getElementById('sum');
    resultEl.value = sumEl;
}
