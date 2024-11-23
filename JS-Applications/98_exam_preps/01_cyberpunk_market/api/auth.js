const baseUrl = 'http://localhost:3030';

export async function register(email, password) {
    const response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const userData = await response.json();

    return userData;
}
