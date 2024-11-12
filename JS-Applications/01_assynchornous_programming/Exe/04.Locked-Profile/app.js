function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.querySelector('#main');

    main.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const profiles = Object.values(data);
            let num = 1;

            for (const profile of profiles) {
                const div = document.createElement('div');
                div.className = 'profile';
                div.setAttribute('id', profile._id);
                div.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${num}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${num}Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user${num}Username" value="${profile.username}" disabled readonly />
                <div class="user${num}Username" style="display:none">
                	<hr>
                	<label>Email:</label>
                	<input type="email" name="user${num}Email" value="${profile.email}" disabled readonly />
                	<label>Age:</label>
                	<input type="number" name="user${num}Age" value="${profile.age}" disabled readonly />
                </div>

                <button class="class-button">Show more</button>
                `;

                main.appendChild(div);
                num++;
            }

            const buttons = document.querySelectorAll('.class-button');
            buttons.forEach((button) => {
                button.addEventListener('click', showMore);
            });
        });

    function showMore(event) {
        const id = event.target.parentNode.id;
        const currentProfile = document.getElementById(id);
        const unlock = currentProfile.querySelector('input[value="unlock"]');

        if (unlock.checked && currentProfile.querySelector('button').textContent === 'Show more') {
            const lockedInfo = currentProfile.querySelector('div');
            lockedInfo.style.display = 'block';
            currentProfile.querySelector('button').textContent = 'Hide it';
        } else if (unlock.checked) {
            currentProfile.querySelector('div').style.display = 'none';
            currentProfile.querySelector('button').textContent = 'Show more';
        }
    }
}
