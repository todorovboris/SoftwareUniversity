function getArticleGenerator(articles) {
    return function () {
        // console.log(articles);
        if (articles.length > 0) {
            const contentElm = document.querySelector('#content');
            const getArticle = articles.shift();

            const newArticleElm = document.createElement('article');
            newArticleElm.textContent = getArticle;

            contentElm.appendChild(newArticleElm);

            console.log(getArticle);
        }
    };
}
