async function solution() {
    const main = document.querySelector('#main');
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    // fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //     });

    const response = await fetch(url);
    const data = await response.json();

    data.forEach((article) => {
        const title = article.title;
        const id = article._id;

        const span = document.createElement('span');
        span.textContent = title;

        const button = document.createElement('button');
        button.className = 'button';
        button.setAttribute('id', id);
        button.textContent = 'More';
        button.addEventListener('click', doMore);

        const divHead = document.createElement('div');
        divHead.className = 'head';

        divHead.appendChild(span);
        divHead.appendChild(button);

        const p = document.createElement('p');
        p.textContent = '';

        const divExtra = document.createElement('div');
        divExtra.className = 'extra';
        divExtra.appendChild(p);
        divExtra.style.display = 'none';

        const divAccordion = document.createElement('div');
        divAccordion.className = 'accordion';
        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);

        main.appendChild(divAccordion);
    });

    async function doMore(ev) {
        const accordion = ev.target.parentNode.parentNode;
        const p = accordion.querySelector('.extra p');
        const extraField = accordion.querySelector('.extra');
        const button = ev.target;

        const id = ev.target.id;
        const detailsUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        const response = await fetch(detailsUrl);
        const data = await response.json();

        console.log(data);
        p.textContent = data.content;

        isHidden = button.textContent === 'More';

        extraField.style.display = isHidden ? 'block' : 'none';
        button.textContent = isHidden ? 'Less' : 'More';
    }
}

window.addEventListener('load', solution);
