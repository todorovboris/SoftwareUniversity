import { html, render } from 'https://unpkg.com/lit-html';
import { recipes } from '../service/recipes.js';
import page from '//unpkg.com/page/page.mjs';

const mainSection = document.querySelector('body main');

const template = (recipes = []) => html`
    <section id="catalog-section">
        ${recipes.map(
            (recipe) => html`
                <article @click=${() => recipeClickHandler(recipe._id)} class="preview" id="${recipe._id}">
                    <div class="title">
                        <h2>${recipe.name}</h2>
                    </div>
                    <div class="small">
                        <img src="${recipe.img}" alt="${recipe.name}" />
                    </div>
                </article>
            `
        )}
    </section>
`;

export default function catalogPage() {
    render(template(), mainSection);

    recipes
        .getAll()
        .then((recipes) => {
            render(template(recipes), mainSection);
        })
        .catch((err) => alert(err.message));
}

async function recipeClickHandler(recipeId) {
    page.redirect(`/catalog/${recipeId}`);
}

function editRecipe() {
    console.log('edit');
}

function deleteRecipe() {
    console.log('delete');
}
