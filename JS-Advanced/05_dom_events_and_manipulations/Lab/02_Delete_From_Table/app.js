function deleteByEmail() {
    const inputField = document.querySelector('[name="email"]');
    const targetMatch = inputField.value.toLocaleLowerCase();
    const resultMessege = document.getElementById('result');
    let isFound = false;

    const table = document.getElementById('customers');
    const emails = table.querySelectorAll('tbody tr');

    if (!emails) {
        return;
    }

    for (const email of emails) {
        const customerData = email.querySelectorAll('td');
        const customerEmail = customerData[1].textContent;
        if (customerEmail.toLocaleLowerCase().includes(targetMatch)) {
            isFound = true;
            email.remove();
        }
    }

    inputField.value = '';
    if (isFound) {
        resultMessege.textContent = 'Deleted.';
    } else {
        resultMessege.textContent = 'Not found.';
    }

    // console.log(inputField.value);
}
