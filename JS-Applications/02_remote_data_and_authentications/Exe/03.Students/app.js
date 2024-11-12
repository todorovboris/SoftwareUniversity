async function solve() {
    const url = 'http://localhost:3030/jsonstore/collections/students';

    const resultsBody = document.querySelector('.container table tbody');

    const response = await fetch(url);
    const data = await response.json();

    for (const student of Object.values(data)) {
        const firstName = student.firstName;
        const lastName = student.lastName;
        const facultyNum = student.facultyNumber;
        const grade = student.grade;

        const tr = document.createElement('tr');
        tr.setAttribute('id', student._id);

        const firstNameCell = tr.insertCell(0);
        firstNameCell.textContent = firstName;

        const lastNameCell = tr.insertCell(1);
        lastNameCell.textContent = lastName;

        const facultyNumCell = tr.insertCell(2);
        facultyNumCell.textContent = facultyNum;

        const gradeCell = tr.insertCell(3);
        gradeCell.textContent = Number(grade).toFixed(2);

        resultsBody.appendChild(tr);
    }

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submitData);

    async function submitData(e) {
        e.preventDefault();

        const firstNameElm = document.getElementById('first-name');
        const lastNameElm = document.getElementById('last-name');
        const facultyNumElm = document.getElementById('faculty-number');
        const gradeElm = document.getElementById('grade');

        const record = {
            firstName: firstNameElm.value,
            lastName: lastNameElm.value,
            facultyNumber: facultyNumElm.value,
            grade: gradeElm.value,
        };

        if (firstNameElm.value !== '' && lastNameElm.value !== '' && facultyNumElm.value !== '' && gradeElm.value !== '') {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(record),
            });
        }

        firstNameElm.value = '';
        lastNameElm.value = '';
        facultyNumElm.value = '';
        gradeElm.value = '';

        location.reload();
    }
}

solve();
