function solve() {
    const addTaskFormElm = document.querySelector('form');

    addTaskFormElm.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = e.target.querySelector('#task').value;
        const description = e.target.querySelector('#description').value;
        const date = e.target.querySelector('#date').value;

        if (task && description && date) {
            taskCreate(task, description, date);
            e.target.reset();
        }
    });

    function taskCreate(task, description, date) {
        const areaOpenElm = document.querySelector('.wrapper section:nth-child(2) > div:nth-child(2)');

        const taskElm = document.createElement('article');
        const newH3 = document.createElement('h3');
        const newP1 = document.createElement('p');
        const newP2 = document.createElement('p');

        newH3.textContent = task;
        newP1.textContent = `Description: ${description}`;
        newP2.textContent = `Due Date: ${date}`;

        const actionsEl = document.createElement('div');
        const btnProgress = document.createElement('button');
        const btnDelete = document.createElement('button');

        actionsEl.className = 'flex';
        btnProgress.textContent = 'Start';
        btnProgress.className = 'green';

        btnDelete.textContent = 'Delete';
        btnDelete.className = 'red';

        btnProgress.addEventListener('click', (e) => {
            const taskElm = e.target.closest('article');
            const nextSectionElm = e.target.closest('section').nextElementSibling.querySelector('div:last-child');
            const currentActionsElm = e.target.closest('div');

            if (e.target.textContent == 'Start') {
                e.target.textContent = 'Finish';
                e.target.className = 'orange';
                e.target.remove();
                currentActionsElm.append(e.target);
            } else {
                currentActionsElm.remove();
            }

            taskElm.remove();
            nextSectionElm.append(taskElm);
        });

        btnDelete.addEventListener('click', () => {
            taskDelete(taskElm);
        });

        actionsEl.append(btnProgress, btnDelete);

        taskElm.append(newH3, newP1, newP2, actionsEl);

        areaOpenElm.appendChild(taskElm);

        // console.log(taskElm);
    }

    function taskDelete(taskElm) {
        taskElm.remove();
    }
}
