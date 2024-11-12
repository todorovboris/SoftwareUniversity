function solve() {
    // Select input fields and sections
    const task = document.querySelector('#task'); // Assuming the id of task title input
    const description = document.querySelector('#description'); // Assuming the id of task description input
    const date = document.querySelector('#date'); // Assuming the id of due date input
    const addBtn = document.querySelector('#add'); // Assuming the id of the Add button

    // const areaOpenElm = document.querySelector('.wrapper section:nth-child(2) > div:nth-child(2)');
    const openTasksSection = document.querySelector('.wrapper section:nth-child(2) > div:nth-child(2)'); // Assuming the id of Open section
    const inProgressTasksSection = document.querySelector('#in-progress'); // Assuming the id of In Progress section
    const completedTasksSection = document.querySelector('.wrapper section:nth-child(4) > div:nth-child(2)'); // Assuming the id of Completed section

    // Add event listener to the Add button
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Validate inputs
        if (task.value === '' || description.value === '' || date.value === '') {
            return; // Do nothing if any field is empty
        }

        // Create task article
        const taskArticle = document.createElement('article');

        // Create and append the title, description, and due date
        const titleElement = document.createElement('h3');
        const descriptionElement = document.createElement('p');
        const dueDateElement = document.createElement('p');

        titleElement.textContent = task.value;
        descriptionElement.textContent = `Description: ${description.value}`;
        dueDateElement.textContent = `Due Date: ${date.value}`;

        // Create the action div with Start and Delete buttons
        const actionsDiv = document.createElement('div');
        const startButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        startButton.textContent = 'Start';
        deleteButton.textContent = 'Delete';

        actionsDiv.className = 'flex'; // Add a class to style it if necessary
        startButton.className = 'green'; // Add a class to style it if necessary
        deleteButton.className = 'red'; // Add a class to style it if necessary

        // Append buttons to actionsDiv
        actionsDiv.append(startButton);
        actionsDiv.append(deleteButton);

        // Append all elements to taskArticle
        taskArticle.appendChild(titleElement);
        taskArticle.appendChild(descriptionElement);
        taskArticle.appendChild(dueDateElement);
        taskArticle.appendChild(actionsDiv);

        // Append the task to the Open section
        openTasksSection.appendChild(taskArticle);

        // Clear input fields
        task.value = '';
        description.value = '';
        date.value = '';

        // Add event listeners to Start and Delete buttons
        startButton.addEventListener('click', () => moveToInProgress(taskArticle));
        deleteButton.addEventListener('click', () => deleteTask(taskArticle));
    });

    function moveToInProgress(taskArticle) {
        // Remove the Start button and add a Finish button
        const actionDiv = taskArticle.querySelector('.flex');
        const startButton = actionDiv.querySelector('.green');
        const finishButton = document.createElement('button');

        finishButton.textContent = 'Finish';
        finishButton.className = 'orange';

        // Replace Start button with Finish button
        actionDiv.replaceChild(finishButton, startButton);

        // Move task to the In Progress section
        inProgressTasksSection.appendChild(taskArticle);

        // Add event listener to Finish button
        finishButton.addEventListener('click', () => moveToCompleted(taskArticle));
    }

    function deleteTask(taskArticle) {
        // Remove the task article from the DOM
        taskArticle.remove();
    }

    function moveToCompleted(taskArticle) {
        // Remove the action div
        const actionDiv = taskArticle.querySelector('.flex');
        actionDiv.remove();

        // Move task to the Completed section
        completedTasksSection.appendChild(taskArticle);
    }
}
