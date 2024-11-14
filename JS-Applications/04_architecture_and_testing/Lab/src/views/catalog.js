const baseUrl = 'http://localhost:3030/data/recipes';
const sectionElement = document.getElementById('catalog-section');

export default function catalogPage() {
    sectionElement.style.display = 'block';
    loadRecipes();
}

async function loadRecipes() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    sectionElement.innerHTML = '';

    const fragment = document.createDocumentFragment();

    for (const recipe of Object.values(data)) {
        const article = document.createElement('article');
        article.className = 'preview';
        article.id = recipe._id;
        article.style.display = 'block';
        article.innerHTML = `
            <div class="title">
                <h2>${recipe.name}</h2>
            </div>
            <div class="small">
                <img src="${recipe.img}" alt="${recipe.name}">
            </div>
        `;

        article.addEventListener('click', loadAdditionalInfo);

        fragment.appendChild(article);
    }

    sectionElement.appendChild(fragment);
}

async function loadAdditionalInfo(e) {
    sectionElement.innerHTML = '';

    const id = e.target.closest('article').id;
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();

    const fragment = document.createDocumentFragment();

    const ingredientsHTML = `
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${data.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
    `;

    const thumbHTML = `
        <div class="thumb">
            <img src="${data.img}" alt="${data.name}">
        </div>
    `;

    const bandHTML = `
        <div class="band">
            ${thumbHTML}
            ${ingredientsHTML}
        </div>
    `;

    const stepsHTML = data.steps.map((step) => `<p>${step}</p>`).join('');
    const descriptionHTML = `
        <div class="description">
            <h3>Preparation:</h3>
            ${stepsHTML}
        </div>
    `;

    const article = document.createElement('article');
    article.innerHTML = `
        <h2>${data.name}</h2>
        ${bandHTML}
        ${descriptionHTML}
    `;

    const userId = localStorage.getItem('_id');
    if (data._ownerId === userId) {
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editRecipe);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteRecipe);

        article.querySelector('.description').appendChild(editBtn);
        article.querySelector('.description').appendChild(deleteBtn);
    }

    fragment.appendChild(article);
    sectionElement.appendChild(fragment);
}

function editRecipe() {
    console.log('edit');
}

function deleteRecipe() {
    console.log('delete');
}
