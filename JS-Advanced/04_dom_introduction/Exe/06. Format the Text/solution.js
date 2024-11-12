function solve() {
    const inputElm = document.querySelector('#input');
    const resultElm = document.querySelector('#output');

    // let resultArr = [];

    if (inputElm.value == '') {
        return;
    }

    let textArr = inputElm.value.split('.');

    if (textArr[textArr.length - 1] === '') {
        textArr.pop();
    }

    // console.log(textArr);

    while (textArr.length > 0) {
        const textParagraph = textArr.splice(0, 3);
        const result = textParagraph.join('. ') + '.';
        // console.log(result.trim());

        const newParagraph = document.createElement('p');
        newParagraph.textContent = result.trim();
        resultElm.appendChild(newParagraph);
    }

    inputElm.value = '';
}
