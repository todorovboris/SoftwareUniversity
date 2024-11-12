function create(wordsArr) {
    const contentElm = document.querySelector('#content');

    for (const word of wordsArr) {
        const newDivElm = document.createElement('div');
        const newParagElm = document.createElement('p');

        newDivElm.appendChild(newParagElm);
        newParagElm.style.display = 'none';
        newParagElm.textContent = word;

        newDivElm.addEventListener('click', (e) => {
            // if ((e.target.querySelector('p').style.display = 'block')) {
            //     e.target.querySelector('p').style.display = 'none';
            // } else {
            //     e.target.querySelector('p').style.display = 'block';
            // }
            e.target.querySelector('p').style.display = 'block';
        });

        contentElm.appendChild(newDivElm);
        //   console.log(newParagraph);
    }
}
