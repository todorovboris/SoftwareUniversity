function attachEventsListeners() {
    const inputElmDays = document.querySelector('#days');
    const inputElmHours = document.querySelector('#hours');
    const inputElmMinutes = document.querySelector('#minutes');
    const inputElmSeconds = document.querySelector('#seconds');

    const buttons = document.querySelectorAll('input[type="button"]');

    const units = {
        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1,
    };

    function updateUnits(secondsAmount) {
        inputElmDays.value = Number(secondsAmount / units.days).toFixed(2);
        inputElmHours.value = Number(secondsAmount / units.hours).toFixed(2);
        inputElmMinutes.value = Number(secondsAmount / units.minutes).toFixed(2);
        inputElmSeconds.value = Number(secondsAmount / units.seconds).toFixed(2);
    }

    function onClick(e) {
        const inputTypeElm = e.target.getAttribute('id').split('Btn')[0];
        const currentTypeElm = document.querySelector('#' + inputTypeElm);
        const currentValue = currentTypeElm.value;

        const multiplier = units[inputTypeElm];

        updateUnits(currentValue * multiplier);
    }

    buttons.forEach((button) => {
        button.addEventListener('click', onClick);
    });

    //
}
