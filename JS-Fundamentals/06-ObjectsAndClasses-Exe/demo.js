const finalProducts = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
];

finalProducts.sort((a, b) => b.id - a.id);

console.log(finalProducts);
