import auth from '../service/auth.js';
import page from '//unpkg.com/page/page.mjs';

export default function logoutPage() {
    const token = localStorage.getItem('accessToken');

    auth.logout(token);
    page.redirect('/');
}
