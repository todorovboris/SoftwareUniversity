import { recipes } from '../service/recipes.js';
const sectionElement = document.getElementById('home-section');

export default function homePage() {
    sectionElement.style.display = 'block';
    const recentRecipes = document.querySelector('.recent-recipes');

    recipes.getRecent().then((recipes) => {
        console.log(recipes);

        // recipes.forEach((recipe) => {
        //     recentRecipes.append(renderRecipe(recipe));
        // });
        recentRecipes.append(...recipes.map(renderRecipe));
    });
}

function renderRecipe(recipe) {
    const article = document.createElement('article');
    article.classList.add('recent');

    article.innerHTML = `
    <div className="recent-preview">
        <img src="${recipe.img}" alt="${recipe.img}" />
    </div>
    <div className="recent-title">${recipe.name}</div>
    `;

    return article;
}
