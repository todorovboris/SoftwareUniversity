import { html, render } from 'https://unpkg.com/lit-html';
import auth from '../service/auth.js';

const mainSection = document.querySelector('body main');

const template = () => html`
    <section id="login-section">
        <h2>Login</h2>
        <form @submit=${formSubmit}>
            <label>E-mail: <input type="text" name="email" /></label>
            <label>Password: <input type="password" name="password" /></label>
            <input type="submit" value="Login" />
        </form>
    </section>
`;

export default function loginPage() {
    render(template(), mainSection);
}

async function formSubmit(e) {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    const loginResult = await auth.login(email, password);

    if (loginResult) {
        location.href = '/';
    }
}
