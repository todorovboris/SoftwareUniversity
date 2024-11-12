function companyUsers(input) {
    const companyEmployees = {};

    for (const tokens of input) {
        const [company, employeesId] = tokens.split(' -> ');

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeesId)) {
                companyEmployees[company].push(employeesId);
            }
        } else {
            companyEmployees[company] = [employeesId];
        }
    }

    const companyEmployeesSorted = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [companyName, idsArr] of companyEmployeesSorted) {
        console.log(companyName);

        for (const id of idsArr) {
            console.log(`-- ${id}`);
        }
    }
    // console.log(companyEmployeesSorted);
}

// companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']);
