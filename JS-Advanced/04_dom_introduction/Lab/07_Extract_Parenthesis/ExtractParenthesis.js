function extract(content) {
    let text = document.getElementById(content).textContent;

    const result = [];
    const matches = text.match(/\(([^)]+)\)/g);

    if (!matches) {
        return '';
    }

    return matches.map((match) => match.slice(1, -1));
}
