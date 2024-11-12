function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchField = document.querySelector('#searchField');
        const studentsRows = document.querySelectorAll('table tbody tr');

        studentsRows.forEach((el) => {
            el.classList.remove('select');
        });

        if (searchField.value == '') {
            return;
        }

        const textForCheck = searchField.value.toLowerCase();

        const studentsList = [...studentsRows].map((el) => el.innerText.toLowerCase());
        const resultArr = [];

        for (let i = 0; i < studentsList.length; i++) {
            if (studentsList[i].indexOf(textForCheck) >= 0) {
                resultArr.push(i);
            }
        }

        console.log(resultArr);

        resultArr.forEach((pos, index) => {
            studentsRows[pos].classList.add('select');
            // console.log(el.toLowerCase());
            // if (el.toLowerCase().includes(textForCheck)) {
            // }
        });

        searchField.value = '';
    }
}
