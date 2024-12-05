import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';

const template = () => html` <!-- Navigation -->
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

    <nav>
        <div>
            <a href="#">Motorcycles</a>
            <a href="#">Search</a>
        </div>

        <!-- Logged-in users -->
        <div class="user">
            <a href="#">Add Motorcycle</a>
            <a href="#">Logout</a>
        </div>

        <!-- Guest users -->
        <div class="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
        </div>
    </nav>`;

export default async function navigationView(ctx, next) {
    render(template(), document.querySelector('#wrapper header'));

    next();
}
