function extractText() {
    let textElements = document.getElementById('items');
    let resultElements = document.getElementById('result');
    // resultElements.textContent = textElements.textContent;
    // console.log(textElements.textContent);
    const result = [];
    for (const child of textElements.children) {
        result.push(child.textContent);
    }

    resultElements.textContent = result.join('\n');
}
