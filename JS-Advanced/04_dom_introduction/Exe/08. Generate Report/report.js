function generateReport() {
    const outputElm = document.querySelector('#output');

    // Select all headers and rows
    const headers = document.querySelectorAll('thead th');
    const rows = document.querySelectorAll('tbody tr');
    const result = [];

    // Loop through each row in the table
    rows.forEach((row) => {
        const rowData = {};
        const cells = row.children;

        // Loop through headers to determine selected columns
        headers.forEach((header, index) => {
            const checkbox = header.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
                const columnName = checkbox.name;
                const cellValue = cells[index].textContent;
                rowData[columnName] = cellValue;
            }
        });

        result.push(rowData); // Add the row data to the result array
    });

    // Output the result as a JSON string
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}
