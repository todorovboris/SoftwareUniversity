function search() {
    const townListElm = document.querySelector('#towns');
    const inputElm = document.querySelector('#searchText');
    const resultElm = document.querySelector('#result');
    countMatch = 0;

    let result = [];

    const townsArr = Array.from(townListElm.children);
    //  console.log(townsArr[0].textContent.toLowerCase());

    if (inputElm.value == '') {
        return;
    }

    for (let i = 0; i < townsArr.length; i++) {
        if (townsArr[i].textContent.toLocaleLowerCase().includes(inputElm.value.toLowerCase())) {
            result.push(i);
        }
    }

    console.log(result);

    result.forEach((index) => {
        townListElm.children[index].style.textDecoration = 'underline';
        townListElm.children[index].style.fontWeight = 'bold';
    });

    inputElm.value = '';
    resultElm.textContent = `${result.length} matches found`;
}
