import { html, render } from 'https://unpkg.com/lit-html';
import auth from '../service/auth.js';

const sectionElement = document.getElementById('login-section');
const loginForm = sectionElement.querySelector('form');

export default function loginPage() {
    sectionElement.style.display = 'block';
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    const loginResult = await auth.login(email, password);

    if (loginResult) {
        location.href = '/';
    }
});
