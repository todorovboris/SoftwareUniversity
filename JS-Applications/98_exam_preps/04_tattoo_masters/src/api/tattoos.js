const baseUrl = 'http://localhost:3030/data/tattoos';

export async function getAll() {
    const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
    const tattoosData = await response.json();
    return tattoosData;
}
