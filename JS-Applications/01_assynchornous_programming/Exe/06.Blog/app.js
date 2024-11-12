function attachEvents() {
    const postsSelection = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-body');

    const loadBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');

    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', viewPosts);

    let commonData;

    async function loadPosts() {
        postsSelection.innerHTML = '';
        const url = `http://localhost:3030/jsonstore/blog/posts`;

        const response = await fetch(url);
        const data = await response.json();
        commonData = data;

        for (const [id, postInfo] of Object.entries(data)) {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = postInfo.title;
            option.dataset.body = postInfo.body;

            postsSelection.appendChild(option);
        }
    }

    async function viewPosts() {
        const url = `http://localhost:3030/jsonstore/blog/comments`;

        let selectedPostId = document.getElementById('posts').value;

        postTitle.textContent = commonData[selectedPostId].title;
        postContent.textContent = commonData[selectedPostId].body;

        const response = await fetch(url);
        const data = await response.json();

        let commentsUl = document.getElementById('post-comments');
        commentsUl.innerHTML = '';

        for (const commentInfo of Object.values(data)) {
            if (commentInfo.postId == selectedPostId) {
                let li = document.createElement('li');
                li.id = commentInfo.id;
                li.textContent = commentInfo.text;
                commentsUl.appendChild(li);
            }
        }
    }
}

attachEvents();
