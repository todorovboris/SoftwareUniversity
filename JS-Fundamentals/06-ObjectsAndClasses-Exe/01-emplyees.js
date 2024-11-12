function employees(arr) {
    for (const name of arr) {
        const nameLength = name.length;

        const employee = {};
        employee['employeeName'] = name;
        employee['personalNum'] = nameLength;

        console.log(
            `Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`
        );
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]);
