function initHeaderNavigation() {
    const email = localStorage.getItem('email');
    const user = document.getElementById('user');
    const guest = document.getElementById('guest');
    const span = document.querySelector('body header nav p span');

    if (email && email !== 'undefined') {
        guest.style.display = 'none';
        span.textContent = email;
        addBtn.disabled = false;
    } else {
        user.style.display = 'none';
    }
}

const loginForm = document.querySelector('body main form');
const urlLogin = 'http://localhost:3030/users/login';

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    const response = await fetch(urlLogin, {
        method: 'post',
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
    localStorage.setItem('id', data._id);

    window.location.href = 'index.html';
});

initHeaderNavigation();
