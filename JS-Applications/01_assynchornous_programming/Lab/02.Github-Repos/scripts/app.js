function loadRepos() {
    const username = document.querySelector('#username').value;
    const url = `https://api.github.com/users/${username}/repos`;
    const reposUl = document.querySelector('#repos');

    fetch(url)
        .then((res) => res.json())
        .then((repos) => {
            reposUl.innerHTML = '';

            repos.forEach((repo) => {
                // console.log(repo);

                const aElm = document.createElement('a');
                aElm.href = repo.html_url;
                aElm.textContent = repo.full_name;

                const liElm = document.createElement('li');
                liElm.appendChild(aElm);

                reposUl.appendChild(liElm);
            });
        });
}
