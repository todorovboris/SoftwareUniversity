function notify(message) {
    // console.log('todo');
    const notificationElm = document.querySelector('#notification');
    notificationElm.textContent = message;
    notificationElm.style.display = 'block';

    notificationElm.addEventListener('click', (e) => {
        e.target.style.display = 'none';
    });
}
