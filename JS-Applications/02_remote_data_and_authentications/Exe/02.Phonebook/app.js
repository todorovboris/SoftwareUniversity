function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const personElm = document.getElementById('person');
    const phoneElm = document.getElementById('phone');

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    const ulPhonebook = document.getElementById('phonebook');

    loadBtn.addEventListener('click', loadContacts);
    createBtn.addEventListener('click', createContacts);

    async function loadContacts() {
        ulPhonebook.innerHTML = '';

        const response = await fetch(url);
        const data = await response.json();
        for (const contact of Object.values(data)) {
            const liContact = document.createElement('li');
            liContact.setAttribute('id', contact._id);
            liContact.textContent = `${contact.person}: ${contact.phone}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteContact);

            liContact.appendChild(deleteBtn);
            ulPhonebook.appendChild(liContact);
        }
    }

    async function deleteContact(e) {
        const id = e.target.parentNode.id;
        e.target.parentNode.remove();
        const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
    }

    async function createContacts() {
        if (personElm.value !== '' && phoneElm.vale !== '') {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ person: personElm.value, phone: phoneElm.value }),
                headers: { 'Content-type': 'application/json' },
            });
        }
        loadBtn.click();
        personElm.value = '';
        phoneElm.value = '';
    }
}

attachEvents();
