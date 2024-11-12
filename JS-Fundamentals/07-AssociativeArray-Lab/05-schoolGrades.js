function schoolGrades(arr) {
    let map = new Map();

    for (const student of arr) {
        const studentInfo = student.split(' ');
        const name = studentInfo.shift();
        const grades = studentInfo.map(Number);
        // console.log(grades);

        if (!map.has(name)) {
            map.set(name, []);
        }

        for (const grade of grades) {
            map.get(name).push(grade);
        }
    }

    let studentInfoArr = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    // console.log(studentInfoArr);

    for (let info of studentInfoArr) {
        // TODO: Write a function – avgGrade() that gets an array of grades and returns
        // the average grade

        function avgGrade(gradesArr) {
            // console.log(gradesArr);
            let sum = 0;
            for (let i = 0; i < gradesArr.length; i++) {
                sum += gradesArr[i];
            }
            return sum / gradesArr.length;
        }

        console.log(`${info[0]}: ${avgGrade(info[1]).toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
// schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);
