function loadCommits() {
    const username = document.querySelector('#username').value;
    const repo = document.querySelector('#repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    const commitsUl = document.querySelector('#commits');
    commitsUl.innerHTML = '';

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw { status: response.status };
            }

            return response.json();
        })
        .then((commits) => {
            commits.forEach((commit) => {
                const liElm = document.createElement('li');
                liElm.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                commitsUl.appendChild(liElm);
            });
        })
        .catch((error) => {
            if (error.status) {
                const li = document.createElement('li');
                li.textContent = `Error: ${error.status} (Not Found)`;
                commitsUl.appendChild(li);
            }
        });
}
