const logoutUrl = 'http://localhost:3030/users/logout';

export default function logoutPage() {
    const token = localStorage.getItem('accessToken');

    fetch(logoutUrl, {
        headers: { 'X-Authorization': token },
    }).then(() => {
        localStorage.clear();
    });

    window.location.href = 'index.html';
}
