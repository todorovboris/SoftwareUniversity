function focused() {
    const section = document.querySelector('div');

    section.addEventListener('focusin', (event) => {
        // Add the "focused" class to the parent element of the input
        event.target.parentElement.classList.add('focused');
    });

    section.addEventListener('blurin', (event) => {
        // Remove the "focused" class when focus is lost
        event.target.parentElement.classList.remove('focused');
    });
}
