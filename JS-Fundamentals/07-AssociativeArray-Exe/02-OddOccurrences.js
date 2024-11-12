function oddOccur(input) {
    let elements = input.toLowerCase().split(' ');
    const elementsCount = new Map();
    const finalOddElms = [];

    for (const element of elements) {
        // elementsMap.set(element, 0);

        if (elementsCount.has(element)) {
            elementsCount.set(element, elementsCount.get(element) + 1);
        } else {
            elementsCount.set(element, 1);
        }
    }

    let elementsArr = Array.from(elementsCount.entries());
    for (const [el, count] of elementsArr) {
        // console.log(`${el} -> ${count}`);
        if (count % 2 !== 0) {
            finalOddElms.push(el);
        }
    }

    console.log(finalOddElms.join(' '));
}

oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// oddOccur('Cake IS SWEET is Soft CAKE sweet Food');
