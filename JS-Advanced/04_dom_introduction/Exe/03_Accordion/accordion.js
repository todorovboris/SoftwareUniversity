function toggle() {
    const buttonElm = document.getElementsByClassName('button')[0];
    const hideTextElm = document.getElementById('extra');

    if (buttonElm.textContent === 'More') {
        hideTextElm.style.display = 'block';
        buttonElm.textContent = 'Less';
    } else {
        hideTextElm.style.display = 'none';
        buttonElm.textContent = 'More';
    }
}
