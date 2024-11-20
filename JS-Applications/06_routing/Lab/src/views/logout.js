import auth from '../service/auth.js';

export default function logoutPage() {
    const token = localStorage.getItem('accessToken');

    auth.logout(token);
    location.href = '/';
}
