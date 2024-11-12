function solve() {
    const url = 'http://localhost:3030/jsonstore/collections/books';

    const booksBody = document.getElementById('books-body');

    const loadBtn = document.getElementById('loadBooks');
    loadBtn.addEventListener('click', loadBooks);

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', submitBook);

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');

    function formAreaConstruction() {
        const form = document.getElementsByTagName('form')[0];
        form.innerHTML = `            
            <h3>FORM</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title..." id="title" />
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author..." id="author" />
            <button id="submit-btn">Submit</button>`;
    }

    async function loadBooks() {
        booksBody.innerHTML = '';

        const response = await fetch(url);
        const data = await response.json();

        for (const [id, book] of Object.entries(data)) {
            const tdTitle = document.createElement('td');
            const tdAuthor = document.createElement('td');
            const tdBtns = document.createElement('td');

            tdTitle.textContent = book.title;
            tdAuthor.textContent = book.author;

            const editBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            editBtn.addEventListener('click', editBook);
            deleteBtn.addEventListener('click', deleteBook);

            editBtn.textContent = 'Edit';
            deleteBtn.textContent = 'Delete';

            tdBtns.appendChild(editBtn);
            tdBtns.appendChild(deleteBtn);

            const tr = document.createElement('tr');
            tr.setAttribute('id', id);
            tr.appendChild(tdTitle);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdBtns);
            booksBody.appendChild(tr);
        }
    }

    async function deleteBook(e) {
        const id = e.target.parentNode.parentNode.id;
        const bookToDelete = document.getElementById(id);
        bookToDelete.remove();
        const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
    }

    async function submitBook(e) {
        e.preventDefault();

        if (titleInput.value !== '' && authorInput.value !== '') {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ author: authorInput.value, title: titleInput.value }),
            });
        }

        titleInput.value = '';
        authorInput.value = '';
        loadBooks();
    }

    function editBook(e) {
        const id = e.target.parentNode.parentNode.id;
        const book = document.getElementById(id);
        const bookTitle = book.querySelectorAll('td')[0].textContent;
        const bookAuthor = book.querySelectorAll('td')[1].textContent;

        const form = document.querySelector('form');
        form.setAttribute('id', id);
        form.innerHTML = '';

        const h3 = document.createElement('h3');
        h3.textContent = 'Edit FORM';

        const labelTile = document.createElement('label');
        labelTile.textContent = 'TITLE';

        const inputTitle = document.createElement('input');
        inputTitle.setAttribute('type', 'text');
        inputTitle.setAttribute('name', 'title');
        inputTitle.setAttribute('placeholder', 'Title...');
        inputTitle.setAttribute('id', 'title');
        inputTitle.value = bookTitle;

        const labelAuthor = document.createElement('label');
        labelAuthor.textContent = 'AUTHOR';

        const inputAuthor = document.createElement('input');
        inputAuthor.setAttribute('type', 'text');
        inputAuthor.setAttribute('name', 'author');
        inputAuthor.setAttribute('placeholder', 'Author...');
        inputAuthor.setAttribute('id', 'author');
        inputAuthor.value = bookAuthor;

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.addEventListener('click', saveTheEdit);

        form.appendChild(h3);
        form.appendChild(labelTile);
        form.appendChild(inputTitle);
        form.appendChild(labelAuthor);
        form.appendChild(inputAuthor);
        form.appendChild(saveBtn);
    }

    async function saveTheEdit(e) {
        e.preventDefault();

        const id = e.target.parentNode.id;

        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');

        const editObj = { author: authorInput.value, title: titleInput.value };

        const response = fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(editObj),
        });

        formAreaConstruction();
        loadBooks();
    }
}

solve();
