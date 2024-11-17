import auth from '../service/auth.js';

const sectionElement = document.getElementById('register-section');
const registerForm = sectionElement.querySelector('form');

export default function registerPage() {
    sectionElement.style.display = 'block';
}

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');

    const registerResult = await auth.register(email, password);

    if (registerResult) {
        location.href = '/';
    }
});
