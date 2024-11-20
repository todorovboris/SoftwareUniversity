export default function renderNavigation() {
    const email = localStorage.getItem('email');
    if (email && email !== 'undefined') {
        const userElm = document.getElementById('user');
        userElm.style.display = 'inline';
    } else {
        const guestElm = document.getElementById('guest');
        guestElm.style.display = 'inline';
    }
}
