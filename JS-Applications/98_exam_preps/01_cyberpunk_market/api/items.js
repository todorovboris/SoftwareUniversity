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

export async function create(itemData) {
    const response = await fetch(`${baseUrl}/data/cyberpunk`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData),
    });

    // const response = await fetch(`${baseUrl}/data/cyberpunk`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(itemData),
    // });

    const data = await response.json();
    return data;
}
