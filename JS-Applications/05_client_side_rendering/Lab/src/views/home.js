// import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { html, render } from 'https://unpkg.com/lit-html';
import { recipes } from '../service/recipes.js';

const sectionElement = document.getElementById('home-section');

const recipesTemplate = (recipes = []) => html`
    <div class="hero">
        <h2>Welcome to My Cookbook</h2>
    </div>
    <header class="section-title">Recently added recipes</header>
    <div class="recent-recipes">
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
    </div>
    <footer class="section-title">
        <p>Browse all recipes in the <a href="/catalog">Catalog</a></p>
    </footer>
`;

export default function homePage() {
    sectionElement.style.display = 'block';

    recipes.getRecent().then((recipes) => {
        render(recipesTemplate(recipes), sectionElement);
    });
}
