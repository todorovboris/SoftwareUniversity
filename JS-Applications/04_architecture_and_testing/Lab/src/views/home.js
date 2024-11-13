const baseUrl = 'http://localhost:3030/data/recipes';
const sectionElement = document.getElementById('home-section');

export default function homePage() {
    sectionElement.style.display = 'block';
    loadRecipes();
}

async function loadRecipes() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    sectionElement.innerHTML = '';

    for (const recipe of Object.values(data)) {
        const h2 = document.createElement('h2');
        h2.textContent = recipe.name;

        const img = document.createElement('img');
        img.src = recipe.img;

        const divTitle = document.createElement('div');
        divTitle.className = 'title';
        divTitle.appendChild(h2);

        const divSmall = document.createElement('div');
        divSmall.className = 'small';
        divSmall.appendChild(img);

        const article = document.createElement('article');
        article.className = 'preview';
        article.setAttribute('id', recipe._id);
        article.style.display = 'block';
        article.appendChild(divTitle);
        article.appendChild(divSmall);
        article.addEventListener('click', loadAdditionalInfo);

        sectionElement.appendChild(article);
    }
}

async function loadAdditionalInfo(e) {
    sectionElement.innerHTML = '';

    const id = e.target.closest('article').id;

    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();

    // define div class BAND
    const h3Ingredients = document.createElement('h3');
    h3Ingredients.textContent = 'Ingredients:';

    const ul = document.createElement('ul');
    for (const ingredient of data.ingredients) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ul.appendChild(li);
    }

    const divIngredients = document.createElement('div');
    divIngredients.className = 'ingredients';
    divIngredients.appendChild(h3Ingredients);
    divIngredients.appendChild(ul);

    const img = document.createElement('img');
    img.src = data.img;

    const divThumb = document.createElement('div');
    divThumb.className = 'thumb';
    divThumb.appendChild(img);

    const divBand = document.createElement('div');
    divBand.className = 'band';
    divBand.appendChild(divThumb);
    divBand.appendChild(divIngredients);

    // define div class DESCRIPTION
    const divDescription = document.createElement('div');
    divDescription.className = 'description';

    const h3Description = document.createElement('h3');
    h3Description.textContent = 'Preparation:';

    divDescription.appendChild(h3Description);

    for (const paragraph of data.steps) {
        const p = document.createElement('p');
        p.textContent = paragraph;
        divDescription.appendChild(p);
    }

    const userId = localStorage.getItem('_id');
    const isOwner = data._ownerId === userId;

    if (isOwner) {
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editRecipe);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteRecipe);

        divDescription.appendChild(editBtn);
        divDescription.appendChild(deleteBtn);
    }

    // append ARTICLE CHILDREN
    const h2 = document.createElement('h2');
    h2.textContent = data.name;

    const article = document.createElement('article');
    article.appendChild(h2);
    article.appendChild(divBand);
    article.appendChild(divDescription);

    sectionElement.appendChild(article);
}

function editRecipe() {
    console.log('edit');
}

function deleteRecipe() {
    console.log('delete');
}
