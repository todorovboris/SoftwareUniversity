function lab(arr, startSection, endSection) {
    let startIndex = arr.indexOf(startSection);
    let endIndex = arr.indexOf(endSection) + 1;

    let result = arr.slice(startIndex, endIndex);
    return result;
}

console.log(lab(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'));
// console.log(lab(['Pumpkin Pie', 'zdrasti', 'Key Lime Pie'], 'Pumpkin Pie', 'Key Lime Pie'));
