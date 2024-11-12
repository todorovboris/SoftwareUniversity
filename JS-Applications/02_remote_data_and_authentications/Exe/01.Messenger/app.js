function attachEvents() {
    const sendBtn = document.querySelector('#submit');
    const refreshBtn = document.querySelector('#refresh');
    const messagesArea = document.querySelector('#messages');

    const nameElm = document.getElementById('author');
    const messageElm = document.getElementById('content');

    sendBtn.addEventListener('click', postMessage);
    refreshBtn.addEventListener('click', loadMessage);

    const url = 'http://localhost:3030/jsonstore/messenger';

    function postMessage() {
        const data = { author: nameElm.value, content: messageElm.value };

        if (nameElm.value !== '' || messageElm.value !== '') {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ author: nameElm.value, content: messageElm.value }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => alert(err.message));
        }
        nameElm.value = '';
        messageElm.value = '';
    }

    async function loadMessage() {
        messagesArea.value = '';
        const response = await fetch(url);
        const data = await response.json();

        console.log(Object.values(data));
        for (const message of Object.values(data)) {
            const author = message.author;
            const content = message.content;

            messagesArea.value += `${author}: ${content}\n`;
        }
    }
}

attachEvents();
