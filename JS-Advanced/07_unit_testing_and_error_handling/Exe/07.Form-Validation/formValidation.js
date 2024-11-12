function validate() {
    const patterns = {
        username: /^[a-zA-Z0-9]{3,20}$/,
        email: /^.*@.*\..*$$/,
        password: /^\w{5,15}$/,
        'confirm-password': /^\w{5,15}$/,
        companyNumber: /^\w{4,4}$/,
    };

    const formElm = document.querySelector('#registerForm');
    const companyElm = document.querySelector('#company');
    const companyInfoElm = document.querySelector('#companyInfo');
    const validElm = document.querySelector('#valid');

    // show additional company info, if the checkbox is checked;
    companyElm.addEventListener('change', (e) => {
        companyInfoElm.style.display = e.target.checked ? 'block' : 'none';
    });

    // show the whole user information once the submit button is clicked;
    formElm.addEventListener('submit', (e) => {
        e.preventDefault();

        const invalidFields = [];
        const inputFieldsForValidation = [...e.target.querySelectorAll('input:not([type="checkbox"])')];

        // delegate at each of the user information rows;
        inputFieldsForValidation.forEach((fieldElm) => {
            const type = fieldElm.getAttribute('id');
            const passwordElm = e.target.querySelector('#password');

            if (type == 'companyNumber' && companyInfoElm.style.display == 'none') return;

            if (!patterns[type].test(fieldElm.value)) {
                fieldElm.style.borderColor = 'red';
                invalidFields.push(fieldElm);
            } else {
                fieldElm.style.borderColor = '';
            }

            if (type == 'confirm-password' && fieldElm.value != passwordElm.value) {
                invalidFields.push(fieldElm);
                invalidFields.push(passwordElm);
                fieldElm.style.borderColor = 'red';
                passwordElm.style.borderColor = 'red';
            }
        });

        validElm.style.display = invalidFields.length == 0 ? 'block' : 'none';
    });
}
