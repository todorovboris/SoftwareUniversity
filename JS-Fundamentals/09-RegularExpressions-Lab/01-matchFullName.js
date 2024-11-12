function solve(names) {
    const regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let isValid = regex.test(names);
    if (isValid) {
        let match = names.match(regex);
        console.log(match.join(' '));
    }
}

solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');
