document.getElementById('logout').style.display = 'none';
const registerUrl = 'http://localhost:3030/users/register';
const registerForm = document.querySelector('body main form');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);

    const password = e.currentTarget.querySelector('input[name=password]').value;
    const email = e.currentTarget.querySelector('input[name=email').value;
    const repass = e.currentTarget.querySelector('input[name=rePass]').value;

    if (password !== repass) {
        return alert("Password don't match");
    }

    const response = await fetch(registerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });

    const data = await response.json();

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('email', data.email);
    localStorage.setItem('id', data._id);

    console.log(data);
    window.location.href = 'index.html';
});
