const createUrl = 'http://localhost:3030/data/recipes';

const sectionElement = document.getElementById('create-section');
const createForm = sectionElement.querySelector('form');

export default function createPage() {
    sectionElement.style.display = 'block';
}

createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const recipeData = Object.fromEntries(formData);

    recipeData.ingredients = recipeData.ingredients.split('\n');
    recipeData.steps = recipeData.steps.split('\n');
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);

    fetch(createUrl, {
        method: 'POST',
        body: JSON.stringify(recipeData),
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });

    window.location.href = 'index.html';
});
