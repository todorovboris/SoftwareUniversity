import { request } from '../lib/requester.js';

const baseUrl = 'http://localhost:3030/users';

// export const register = async (email, password) => {
//     return request('POST', `${baseUrl}/register`, { email, password });
// };

// export const login = async (email, password) => {
//     return request('POST', `${baseUrl}/login`, { email, password });
// };

export async function register(email, password) {
    const response = await fetch(`${baseUrl}/register`, {
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

export async function login(email, password) {
    const response = await fetch(`${baseUrl}/login`, {
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

export async function logout(token) {
    return fetch(`${baseUrl}/logout`, {
        headers: { 'X-Authorization': token },
    }).then(() => {
        localStorage.clear();
    });
}
