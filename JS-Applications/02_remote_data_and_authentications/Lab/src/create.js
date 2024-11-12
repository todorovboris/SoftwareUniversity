const createForm = document.querySelector('main article form');
const createUrl = 'http://localhost:3030/data/recipes';

// createForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const recipeData = Object.fromEntries(formData);

//     recipeData.ingredients = recipeData.ingredients.split('\n');
//     recipeData.steps = recipeData.steps.split('\n');
//     const accessToken = localStorage.getItem('accessToken');

//     console.log(recipeData);

//     const response = await fetch(createUrl, {
//         method: 'POST',
//         body: JSON.stringify(recipeData),
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Authorization': accessToken,
//         },
//     });

//     // const data = response.json();

//     // window.location.href = 'index.html';
// });

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
