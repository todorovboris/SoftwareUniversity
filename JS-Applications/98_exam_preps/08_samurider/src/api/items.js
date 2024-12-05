const baseUrl = 'http://localhost:3030/data/motorcycles';

export async function getAll() {
    const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
    const items = await response.json();
    return items;
}
