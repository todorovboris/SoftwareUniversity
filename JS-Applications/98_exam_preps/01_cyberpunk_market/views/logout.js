import { logout } from '../api/auth.js';
import { html, render } from '../lib/lit-html.js';
import page from '../lib/page.js';

export default async function logoutView(ctx) {
    const token = localStorage.getItem('accessToken');

    logout(token);

    page.redirect('/');
}
