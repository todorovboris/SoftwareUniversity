const baseUrl = 'http://localhost:3030/data/motorcycles';

export async function getAll() {
    const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
    const items = await response.json();
    return items;
}

export async function createItem(newItemData) {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken'),
        },
        body: JSON.stringify(newItemData),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const item = await response.json();
    return item;
}
