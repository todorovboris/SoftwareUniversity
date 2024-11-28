const baseUrl = 'http://localhost:3030/data/solutions';

export async function getAll() {
    const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
    const solutions = await response.json();

    return solutions;
}
