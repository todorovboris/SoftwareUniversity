import { html, render } from '../lib/lit-html.js';

const template = () => html` <section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export default async function registerView(ctx) {
    render(template());
}

// async function registerFormSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const email = formData.get('email');
//     const password = formData.get('password');

//     try {
//         //
//     } catch (err) {
//         //
//     }
// }
