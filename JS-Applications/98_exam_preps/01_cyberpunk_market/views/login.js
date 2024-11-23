import { html, render } from '../lib/lit-html.js';

const template = () => html` <section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">Not registered? <a href="/register">Create an account</a></p>
        </form>
    </div>
</section>`;

export default async function loginView(ctx) {
    render(template());
}

async function loginFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');

    // const userData = await ÷
}
