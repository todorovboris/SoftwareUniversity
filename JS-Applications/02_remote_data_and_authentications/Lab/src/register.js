const registerForm = document.querySelector('main article form');
const registerUrl = 'http://localhost:3030/users/register';

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const password = e.currentTarget.querySelector('input[name=password').value;
    const email = e.currentTarget.querySelector('input[name=email').value;
    const rePass = e.currentTarget.querySelector('input[name=rePass').value;

    const response = await fetch(registerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });

    const data = await response.json();
    // it return accessToken, which will be used for future authentications,
    // so we should save it somewhere
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('email', data.email);

    window.location.href = 'index.html';
});
