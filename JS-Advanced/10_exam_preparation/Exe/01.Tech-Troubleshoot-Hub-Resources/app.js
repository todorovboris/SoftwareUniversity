window.addEventListener('load', solution);

function solution() {
    const addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', readInput);

    // input fields
    const employeeInput = document.querySelector('#employee');
    const categoryInput = document.querySelector('#category');
    const urgencyInput = document.querySelector('#urgency');
    const teamInput = document.querySelector('#team');
    const descriptionInput = document.querySelector('#description');

    // section panels
    const preview = document.querySelector('.preview-list');
    const pending = document.querySelector('.pending-list');
    const resolved = document.querySelector('.resolved-list');

    let employee;
    let category;
    let urgency;
    let team;
    let description;

    // read input fields and invoke the fn for creating the previewSection;
    function readInput(event) {
        event.preventDefault();

        employee = employeeInput.value;
        category = categoryInput.value;
        urgency = urgencyInput.value;
        team = teamInput.value;
        description = descriptionInput.value;

        if (employee == '' || category == '' || urgency == '' || team == '' || description == '') return;

        addBtn.disabled = true;

        clearInputs();

        creaetePreview(employee, category, urgency, team, description);
    }

    function creaetePreview(employee, category, urgency, team, description) {
        const li = document.createElement('li');
        li.className = 'problem-content';

        const article = document.createElement('article');
        article.appendChild(createParams(employee, 'From'));
        article.appendChild(createParams(category, 'Category'));
        article.appendChild(createParams(urgency, 'Urgency'));
        article.appendChild(createParams(team, 'Assigned to'));
        article.appendChild(createParams(description, 'Description'));
        li.appendChild(article);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => edit(li, employee, category, urgency, team, description));

        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', () => creaetePending(li, employee, category, urgency, team, description));

        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        preview.appendChild(li);
    }

    function edit(li, employee, category, urgency, team, description) {
        employeeInput.value = employee;
        categoryInput.value = category;
        urgencyInput.value = urgency;
        teamInput.value = team;
        descriptionInput.value = description;

        addBtn.disabled = false;
        li.remove();
    }

    function creaetePending(li, employee, category, urgency, team, description) {
        li.querySelector('.edit-btn').remove();
        li.querySelector('.continue-btn').remove();

        const resolveBtn = document.createElement('button');
        resolveBtn.textContent = 'Resolved';
        resolveBtn.className = 'resolve-btn';
        resolveBtn.addEventListener('click', () => createResolved(li));
        li.appendChild(resolveBtn);

        pending.appendChild(li);
    }

    function createResolved(li) {
        li.querySelector('.resolve-btn').remove();

        const clearBtn = document.createElement('button');
        clearBtn.className = 'clear-btn';
        clearBtn.textContent = 'Clear';
        clearBtn.addEventListener('click', (e) => {
            // window.location = window.location;
            li.remove();
        });
        li.appendChild(clearBtn);

        resolved.appendChild(li);
    }

    function createParams(value, text) {
        const p = document.createElement('p');
        p.textContent = `${text}: ${value}`;

        return p;
    }

    function clearInputs() {
        employeeInput.value = '';
        categoryInput.value = '';
        urgencyInput.value = '';
        teamInput.value = '';
        descriptionInput.value = '';
    }
}
