function solve() {
    window.addEventListener('load', loadRecipes);

    const url = 'http://localhost:3030/jsonstore/cookbook/details';

    async function loadRecipes() {
        const response = await fetch(url);
        const data = await response.json();
        const mainField = document.querySelector('main');
        mainField.innerHTML = '';

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
            article.addEventListener('click', loadInfo);

            mainField.appendChild(article);
        }
    }

    async function loadInfo(e) {
        const mainField = document.querySelector('main');
        mainField.innerHTML = '';

        const id = e.target.closest('article').id;

        const response = await fetch(`${url}/${id}`);
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

        for (const para of data.steps) {
            const p = document.createElement('p');
            p.textContent = para;
            divDescription.appendChild(p);
        }

        // append ARTICLE CHILDREN
        const h2 = document.createElement('h2');
        h2.textContent = data.name;

        const article = document.createElement('article');
        article.appendChild(h2);
        article.appendChild(divBand);
        article.appendChild(divDescription);

        mainField.appendChild(article);
    }
}

solve();
