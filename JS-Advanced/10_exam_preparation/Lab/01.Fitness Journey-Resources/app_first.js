window.addEventListener('load', solve);

function solve() {
    const bodyElm = document.querySelector('#body');
    const mainElm = document.querySelector('#main');

    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const nameElm = document.querySelector('#name');
        const emailElm = document.querySelector('#email');
        const contactElm = document.querySelector('#contact-number');
        const classType = document.querySelector('#class-type');
        const classTime = document.querySelector('#class-time');

        if (!nameElm.value || !emailElm.value || !contactElm.value || !classType.value || !classTime.value) {
            return;
        }

        const infoItemElm = document.createElement('li');
        infoItemElm.classList.add('info-item');

        const personalInfoElm = document.createElement('article');
        personalInfoElm.classList.add('personal-info');

        const nextName = document.createElement('p');
        const nextEmail = document.createElement('p');
        const nextContact = document.createElement('p');
        const nextClassType = document.createElement('p');
        const nextClassTime = document.createElement('p');

        nextName.textContent = nameElm.value;
        nextEmail.textContent = emailElm.value;
        nextContact.textContent = contactElm.value;
        nextClassType.textContent = classType.value;
        nextClassTime.textContent = classTime.value;

        personalInfoElm.append(nextName, nextEmail, nextContact, nextClassType, nextClassTime);

        const editBtn = document.createElement('button');
        const continueBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        continueBtn.textContent = 'Continue';
        editBtn.classList.add('edit-btn');
        continueBtn.classList.add('continue-btn');

        infoItemElm.append(personalInfoElm, editBtn, continueBtn);

        const classInfoElm = document.querySelector('.class-info');
        classInfoElm.appendChild(infoItemElm);

        nameElm.value = '';
        emailElm.value = '';
        contactElm.value = '';
        classType.value = '';
        classTime.value = '';

        nextBtn.disabled = true;

        editBtn.addEventListener('click', (e) => {
            nextBtn.disabled = false;

            nameElm.value = nextName.textContent;
            emailElm.value = nextEmail.textContent;
            contactElm.value = nextContact.textContent;
            classType.value = nextClassType.textContent;
            classTime.value = nextClassTime.textContent;

            infoItemElm.remove();
        });

        continueBtn.addEventListener('click', (e) => {
            infoItemElm.remove();

            const confirmClassElm = document.querySelector('.confirm-class');

            const continueInfoElm = document.createElement('li');
            continueInfoElm.classList.add('continue-info');

            editBtn.remove();
            continueBtn.remove();

            const cancelBtn = document.createElement('button');
            const confirmBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            confirmBtn.textContent = 'Confirm';
            cancelBtn.classList.add('cancel-btn');
            confirmBtn.classList.add('confirm-btn');

            continueInfoElm.append(personalInfoElm, cancelBtn, confirmBtn);
            confirmClassElm.append(continueInfoElm);

            cancelBtn.addEventListener('click', (e) => {
                continueInfoElm.remove();
                nextBtn.disabled = false;
            });

            confirmBtn.addEventListener('click', (e) => {
                mainElm.remove();

                const finalMsgElm = document.createElement('h1');
                finalMsgElm.id = 'thank-you';
                finalMsgElm.textContent = 'Thank youfor scheduling your appointment, we look forward to seeing you!';

                const doneBtn = document.createElement('button');
                doneBtn.id = 'done-btn';
                doneBtn.textContent = 'Done';

                bodyElm.append(finalMsgElm, doneBtn);

                doneBtn.addEventListener('click', (e) => {
                    location.reload();
                });
            });
        });
    });
}
