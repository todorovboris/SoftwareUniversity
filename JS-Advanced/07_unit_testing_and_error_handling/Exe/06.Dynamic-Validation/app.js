function validate() {
    const emailElm = document.querySelector('#email');
    const emailPattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    emailElm.addEventListener('change', (e) => {
        emailElm.className = !emailPattern.test(emailElm.value) ? 'error' : '';
    });
}
