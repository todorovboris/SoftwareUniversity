import { request } from '../lib/requester.js';

const baseUrl = 'http://localhost:3030';

export async function getAll() {
    const response = await fetch(`${baseUrl}/data/cyberpunk?sortBy=_createdOn%20desc`);
    const items = await response.json();

    return items;
}

// export async function getOne(id) {
//     const response = await fetch(`${baseUrl}/cyberpunk/${id}`);
//     const item = await response.json();
//     return item;
// }

export async function createItem(itemData) {
    const response = await fetch(`${baseUrl}/data/cyberpunk`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken'),
        },
        body: JSON.stringify(itemData),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();
    return data;
}

// export const create = (itemData) => {
//     return request('POST', `${baseUrl}/data/cyberpunk`, itemData);
// };
