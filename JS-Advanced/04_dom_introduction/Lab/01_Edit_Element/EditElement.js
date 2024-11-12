function editElement(ref, match, replacer) {
    let targetText = ref.textContent;
    const regex = new RegExp(match, 'g');
    const edited = targetText.replace(regex, replacer);
    ref.textContent = edited;
    // console.log(text);
}
