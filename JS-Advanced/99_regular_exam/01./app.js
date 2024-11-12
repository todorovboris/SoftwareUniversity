window.addEventListener('load', solve);

function solve() {
    const addBtn = document.querySelector('#add-activity');
    addBtn.addEventListener('click', readInpt);

    // input fields
    const activityInput = document.querySelector('#type');
    const intensityInput = document.querySelector('#intensity');
    const caloriesInput = document.querySelector('#calories');
    const durationInput = document.querySelector('#duration');
    const dateInput = document.querySelector('#date');

    // section panels
    const preview = document.querySelector('#preview-activity');
    const activitiesTable = document.querySelector('#activities-table');

    let activity;
    let intensity;
    let calories;
    let duration;
    let date;

    function readInpt(event) {
        event.preventDefault();

        activity = activityInput.value;
        intensity = intensityInput.value;
        calories = caloriesInput.value;
        duration = durationInput.value;
        date = dateInput.value;

        if (!activity || !intensity || !calories || !duration || !date) return;

        addBtn.disabled = true;

        clearInputs();

        createPreview(activity, intensity, calories, duration, date);
    }

    function createPreview(activity, intensity, calories, duration, date) {
        const li = document.createElement('li');

        const article = document.createElement('article');
        article.appendChild(createParams(activity, 'Activity'));
        article.appendChild(createParams(intensity, 'Intensity'));
        article.appendChild(createParams(duration, 'Duration'));
        article.appendChild(createParams(date, 'Date'));
        article.appendChild(createParams(calories, 'Calories'));
        li.appendChild(article);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => edit(li, activity, intensity, calories, duration, date));

        const nextBtn = document.createElement('button');
        nextBtn.className = 'next-btn';
        nextBtn.textContent = 'Next';
        nextBtn.addEventListener('click', () => createTable(li, activity, intensity, calories, duration, date));

        const btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container';
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(nextBtn);

        li.appendChild(btnContainer);

        preview.appendChild(li);
    }

    function edit(li) {
        addBtn.disabled = false;

        activityInput.value = activity;
        intensityInput.value = intensity;
        caloriesInput.value = calories;
        durationInput.value = duration;
        dateInput.value = date;

        li.remove();
    }

    function createTable(li, activity, intensity, calories, duration, date) {
        // li.querySelector('.edit-btn').remove();
        // li.querySelector('.next-btn').remove();

        const tr = document.createElement('tr');

        li.remove();

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e) => {
            tr.remove();
            addBtn.disabled = false;
        });

        const tdActivity = document.createElement('td');
        tdActivity.className = 'type-cell';
        tdActivity.textContent = activity;

        const tdDuration = document.createElement('td');
        tdDuration.className = 'duration-cell';
        tdDuration.textContent = duration;

        const tdCalories = document.createElement('td');
        tdCalories.className = 'calories-cell';
        tdCalories.textContent = calories;

        const tdDate = document.createElement('td');
        tdDate.className = 'date-cell';
        tdDate.textContent = date;

        const tdIntensity = document.createElement('td');
        tdIntensity.className = 'intensity-cell';
        tdIntensity.textContent = intensity;

        const tdBtnCell = document.createElement('td');
        tdBtnCell.className = 'btn-cell';
        tdBtnCell.appendChild(deleteBtn);

        tr.appendChild(tdActivity);
        tr.appendChild(tdDuration);
        tr.appendChild(tdCalories);
        tr.appendChild(tdDate);
        tr.appendChild(tdIntensity);
        tr.appendChild(tdBtnCell);

        activitiesTable.appendChild(tr);
    }

    function createParams(value, text) {
        const p = document.createElement('p');

        if (text == 'Duration') {
            p.textContent = `${text}: ${value} min.`;
        } else {
            p.textContent = `${text}: ${value}`;
        }
        return p;
    }

    function clearInputs() {
        activityInput.value = '';
        intensityInput.value = '';
        caloriesInput.value = '';
        durationInput.value = '';
        dateInput.value = '';
    }
}
