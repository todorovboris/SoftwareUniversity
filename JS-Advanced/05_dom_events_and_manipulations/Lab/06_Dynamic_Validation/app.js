function validate() {
    const regex = /[a-z]+@[a-z]+\.[a-z]+/g;

    const emailField = document.getElementById('email');

    emailField.addEventListener('change', (e) => {
        if (regex.test(emailField.value)) {
            emailField.classList.remove('error');
        } else {
            emailField.classList.add('error');
        }
    });
}
