const baseUrl = 'http://localhost:3030';

async function register(email, password) {
    const response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();

    if (data.code >= 400) {
        return alert(data.message);
    }

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('email', data.email);
    localStorage.setItem('_id', data._id);

    return data;
}
