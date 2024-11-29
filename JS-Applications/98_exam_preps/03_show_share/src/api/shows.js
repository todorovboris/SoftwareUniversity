const baseUrl = 'http://localhost:3030/data/shows';

export async function getAll() {
    const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
    const shows = await response.json();

    return shows;
}
