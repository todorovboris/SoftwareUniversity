function solve() {
    let resultArr = [];

    const textEl = document.getElementById('text');
    const conventionEl = document.getElementById('naming-convention');
    const resultEl = document.getElementById('result');

    const text = textEl.value.toLowerCase();
    const convention = conventionEl.value.toLowerCase();

    if (convention.includes('pascal')) {
        let textArr = text.split(' ');
        const capitalizedArray = textArr.map((el) => {
            return el.charAt(0).toUpperCase() + el.slice(1);
        });
        resultEl.textContent = capitalizedArray.join('');
    } else if (convention.includes('camel')) {
        let textArr = text.split(' ');
        const capitalizedArray = textArr.map((el, index) => {
            if (index === 0) {
                return el;
            }

            return el.charAt(0).toUpperCase() + el.slice(1);
        });
        resultEl.textContent = capitalizedArray.join('');
    } else {
        resultEl.textContent = 'Error!';
    }
}
