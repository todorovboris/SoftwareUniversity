const baseUrl = 'http://localhost:3030';

export async function getAll() {
    const response = await fetch(`${baseUrl}/data/cyberpunk?sortBy=_createdOn%20desc`);
    const items = await response.json();

    return items;
}
