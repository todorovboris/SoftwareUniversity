// import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { html, render } from 'https://unpkg.com/lit-html';
import { recipes } from '../service/recipes.js';

const sectionElement = document.getElementById('home-section');

const recipeTemplate = (recipes) => html`
    ${recipes.map(
        (recipe) => html`
            <article class="recent">
                <div className="recent-preview">
                    <img src="${recipe.img}" alt="${recipe.img}" />
                </div>
                <div className="recent-title">${recipe.name}</div>
            </article>
        `
    )}
`;

export default function homePage() {
    sectionElement.style.display = 'block';
    const recentRecipes = document.querySelector('.recent-recipes');

    recipes.getRecent().then((recipes) => {
        render(recipeTemplate(recipes), recentRecipes);
    });
}
