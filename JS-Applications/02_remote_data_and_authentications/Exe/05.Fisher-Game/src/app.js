const url = 'http://localhost:3030/data/catches';

const mainField = document.getElementById('main');
mainField.style.display = 'none';

const loadBtn = document.querySelector('body main section aside button');
loadBtn.addEventListener('click', loadCaches);

const logoutBtn = document.querySelector('body header nav div a');
logoutBtn.addEventListener('click', logout);

function initHeaderNavigation() {
    const email = localStorage.getItem('email');
    const user = document.getElementById('user');
    const guest = document.getElementById('guest');
    const span = document.querySelector('body header nav p span');

    if (email && email !== 'undefined') {
        guest.style.display = 'none';
        span.textContent = email;
        addBtn.disabled = false;
    } else {
        user.style.display = 'none';
    }
}

function renderCatch(angler, weight, species, location, bait, time, dataId) {
    const info = `
    <label>Angler</label>
    <input type="text" class="angler" value="${angler}" />
    <label>Weight</label>
    <input type="text" class="weight" value="${weight}" />
    <label>Species</label>
    <input type="text" class="species" value="${species}" />
    <label>Location</label>
    <input type="text" class="location" value="${location}" />
    <label>Bait</label>
    <input type="text" class="bait" value="${bait}" />
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${time}" />
    <button class="update" data-id="${dataId}">Update</button>
    <button class="delete" data-id="${dataId}">Delete</button>
    `;

    return info;
}

async function loadCaches() {
    // document.getElementById('addForm').reset();
    const localStorageId = localStorage.getItem('id');
    mainField.style.display = '';

    const catchesField = document.getElementById('catches');
    catchesField.innerHTML = '';

    const response = await fetch(url);
    const catchData = await response.json();

    for (const catchInfo of catchData) {
        const div = document.createElement('div');
        div.className = 'catch';
        div.setAttribute('id', catchInfo._ownerId);

        const info = renderCatch(
            catchInfo.angler,
            catchInfo.weight,
            catchInfo.species,
            catchInfo.location,
            catchInfo.bait,
            catchInfo.captureTime,
            catchInfo._id
        );

        div.innerHTML = `${info}`;
        catchesField.appendChild(div);

        if (localStorageId !== catchInfo._ownerId) {
            const inputs = div.querySelectorAll('input, button');
            inputs.forEach((input) => (input.disabled = true));
        }
    }
    const updateBtns = document.querySelectorAll('.update');
    const deleteBtns = document.querySelectorAll('.delete');

    updateBtns.forEach((btn) => btn.addEventListener('click', updateCatch));
    deleteBtns.forEach((btn) => btn.addEventListener('click', deleteCatch));
}

const addCatchesForm = document.getElementById('addForm');
const addBtn = addCatchesForm.querySelector('fieldset button');
addCatchesForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem('accessToken');
    const { angler, weight, species, location, bait, captureTime } = Object.fromEntries(new FormData(e.currentTarget));
    if (!angler || !weight || !species || !location || !bait || !captureTime) return;

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
        body: JSON.stringify({
            angler,
            weight,
            species,
            location,
            bait,
            captureTime,
        }),
    });

    loadCaches();
});

async function updateCatch(e) {
    const angler = e.currentTarget.parentNode.querySelector('.angler').value;
    const weight = e.currentTarget.parentNode.querySelector('.weight').value;
    const species = e.currentTarget.parentNode.querySelector('.species').value;
    const location = e.currentTarget.parentNode.querySelector('.location').value;
    const bait = e.currentTarget.parentNode.querySelector('.bait').value;
    const captureTime = e.currentTarget.parentNode.querySelector('.captureTime').value;

    const updatedData = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,
    };

    const id = e.target.getAttribute('data-id');

    if (angler == '' || weight == '' || species == '' || location == '' || bait == '' || captureTime == '') return;

    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
        headers: { 'X-Authorization': localStorage.getItem('accessToken') },
    });

    loadCaches();
}

async function deleteCatch(e) {
    const id = e.target.getAttribute('data-id');
    e.target.parentNode.remove();
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': localStorage.getItem('accessToken') },
    });
}

// LOGOUT function doesnt work properly, it should be check why the url do not response properly !!!!
async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'X-Authorization': localStorage.getItem('accessToken'),
        },
    });

    if (response.status >= 200) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        window.location = 'index.html';
    } else {
        console.error(await response.json());
    }
}

initHeaderNavigation();
