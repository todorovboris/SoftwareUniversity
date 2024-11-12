function extractFile(str) {
    const path = str.split('\\');
    const lastElement = path.pop();
    const lastDotIndex = lastElement.lastIndexOf('.');

    const extension = lastElement.substring(lastDotIndex + 1, lastElement.length);
    const fileName = lastElement.substring(0, lastDotIndex);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('-----------');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
