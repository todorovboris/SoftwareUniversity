const loginUrl = 'http://localhost:3030/users/login';

const sectionElement = document.getElementById('login-section');
const loginForm = sectionElement.querySelector('form');

export default function loginPage() {
    sectionElement.style.display = 'block';
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    const response = await fetch(loginUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();
    console.log(data);

    if (data.code >= 400) {
        return alert(data.message);
    }

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('email', data.email);
    localStorage.setItem('_id', data._id);

    window.location.href = 'index.html';
});
