import { html, render } from 'https://unpkg.com/lit-html';
import { recipes } from '../service/recipes.js';
const baseUrl = 'http://localhost:3030/data/recipes';

const mainSection = document.querySelector('body main');
const sectionElement = document.getElementById('catalog-section');

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

const detailsInfoTemplate = ({ article, isOwner }) => html`
    <article>
        <h2>${article.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src="${article.img}" alt="${article.name}" />
            </div>

            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${article.ingredients.map((ingredient) => html`<li>${ingredient}</li>`)}
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${article.steps.map((step) => html`<p>${step}</p>`)}
        </div>
        ${isOwner
            ? html`
                  <div>
                      <button>Edit</button>
                      <button>Delete</button>
                  </div>
              `
            : ''}
    </article>
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
    const response = await fetch(`${baseUrl}/${recipeId}`);
    const articleDetails = await response.json();

    const userId = localStorage.getItem('_id');
    const isOwner = articleDetails._ownerId === userId;

    render(
        detailsInfoTemplate({
            article: articleDetails,
            isOwner,
        }),
        mainSection
    );
}

function editRecipe() {
    console.log('edit');
}

function deleteRecipe() {
    console.log('delete');
}
