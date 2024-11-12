function lockedProfile() {
    // V1: with delegation and BETTER WAY !!!!
    document.querySelector('main').addEventListener('click', (e) => {
        if (e.target.nodeName == 'BUTTON') {
            const profile = e.target.closest('.profile');
            const lockUnlockBtn = profile.querySelector("input[type='radio']:checked").value;

            // console.log(lockUnlockBtn);

            if (lockUnlockBtn == 'unlock') {
                const hiddenFields = profile.querySelector("[id*='HiddenFields']");

                console.log(hiddenFields);

                if (hiddenFields.style.display == 'block') {
                    hiddenFields.style.display = 'none';
                    e.target.textContent = 'Show more';
                } else {
                    hiddenFields.style.display = 'block';
                    e.target.textContent = 'Hide it';
                }
            }
        }
    });

    // V2 :
    /*
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', clickEventHeandler);
    });

    function clickEventHeandler(e) {
        const profile = e.target.closest('.profile');
        const lockUnlockBtn = profile.querySelector("input[type='radio']:checked").value;

        // console.log(lockUnlockBtn);

        if (lockUnlockBtn == 'unlock') {
            const hiddenFields = profile.querySelector("[id*='HiddenFields']");

            console.log(hiddenFields);

            if (hiddenFields.style.display == 'block') {
                hiddenFields.style.display = 'none';
                e.target.textContent = 'Show more';
            } else {
                hiddenFields.style.display = 'block';
                e.target.textContent = 'Hide it';
            }
        }
    }
        */
}
