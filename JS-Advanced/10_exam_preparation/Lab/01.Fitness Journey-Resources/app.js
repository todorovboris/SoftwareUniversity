window.addEventListener('load', solve);

function solve() {
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', readInput);

    // input fields
    const nameElm = document.querySelector('#name');
    const emailElm = document.querySelector('#email');
    const contactElm = document.querySelector('#contact-number');
    const classTypeElm = document.querySelector('#class-type');
    const classTimeElm = document.querySelector('#class-time');

    // card panels
    const previewClassElm = document.querySelector('.class-info');
    const confirmClassElm = document.querySelector('.confirm-class');

    let name;
    let email;
    let contact;
    let classType;
    let time;

    function readInput(event) {
        event.preventDefault();

        name = nameElm.value;
        email = emailElm.value;
        contact = contactElm.value;
        classType = classTypeElm.value;
        time = classTimeElm.value;

        if (name == '' || email == '' || contact == '' || classType == '' || time == '') {
            return;
        }

        nextBtn.disabled = true;
        nameElm.value = '';
        emailElm.value = '';
        contactElm.value = '';
        classTypeElm.value = '';
        classTimeElm.value = '';

        createPreview(name, email, contact, classType, time);
    }

    function createPreview(name, email, contact, classType, time) {
        const infoItem = document.createElement('li');
        infoItem.className = 'info-item';
        const articleElm = document.createElement('article');
        articleElm.className = 'personal-info';
        articleElm.appendChild(createParams(name));
        articleElm.appendChild(createParams(email));
        articleElm.appendChild(createParams(contact));
        articleElm.appendChild(createParams(classType));
        articleElm.appendChild(createParams(time));
        infoItem.appendChild(articleElm);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', edit);

        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.className = 'continue-btn';
        continueBtn.addEventListener('click', continueFn);

        infoItem.appendChild(editBtn);
        infoItem.appendChild(continueBtn);

        previewClassElm.appendChild(infoItem);
    }

    function edit() {
        nextBtn.disabled = false;
        nameElm.value = name;
        emailElm.value = email;
        contactElm.value = contact;
        classTypeElm.value = classType;
        classTimeElm.value = time;

        previewClassElm.innerHTML = '';
    }

    function continueFn() {
        const element = previewClassElm.querySelector('li');
        element.className = 'continue-info';
        confirmClassElm.appendChild(element);

        document.querySelector('.edit-btn').remove();
        document.querySelector('.continue-btn').remove();

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.className = 'cancel-btn';
        cancelBtn.addEventListener('click', cancel);

        const confirmBtn = document.createElement('button');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.className = 'confirm-btn';
        confirmBtn.addEventListener('click', confirmAction);

        element.appendChild(cancelBtn);
        element.appendChild(confirmBtn);
    }

    function cancel() {
        confirmClassElm.innerHTML = '';
        nextBtn.disabled = false;
    }

    function confirmAction() {
        document.querySelector('#main').remove();

        const finalMsgElm = document.createElement('h1');
        finalMsgElm.id = 'thank-you';
        finalMsgElm.textContent = 'Thank youfor scheduling your appointment, we look forward to seeing you!';

        const doneBtn = document.createElement('button');
        doneBtn.id = 'done-btn';
        doneBtn.textContent = 'Done';

        // bodyElm.append(finalMsgElm, doneBtn);
        document.body.appendChild(finalMsgElm);
        document.body.appendChild(doneBtn);

        doneBtn.addEventListener('click', (e) => {
            window.location = window.location;
        });
    }

    function createParams(value) {
        const p = document.createElement('p');
        p.textContent = value;
        return p;
    }
}
